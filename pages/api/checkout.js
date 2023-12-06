import mongooseConnect from "@/lib/mongoose"
import { Inventory } from "@/models/Inventory"
import { Order } from "@/models/Order"
import { Setting } from "@/models/Setting";
const stripe = require('stripe')(process.env.STRIPE_SK);
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.json('Should be a POST request')
        return
    }
    await mongooseConnect()
    const { name, email, phone, address, cartProducts } = req.body
    const inventory = cartProducts
    const uniques = inventory.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.id === item.id && t.size.name === item.size.name
        ))
    );

    const productsInfos = await Promise.all(uniques.map(async (item) => {
        const productInfo = await Inventory.findOne({
            _id: item.id,
            size: { $elemMatch: { name: item.size.name } }
        }).populate('product');
        return {
            ...item,
            productId: productInfo.product._id,
            productTitle: productInfo.product.title,
            productPrice: productInfo.price
        };
    }));

    let line_items = []
    for (const uniqueItem of uniques) {
        const productInfo = productsInfos.find(p => p.id === uniqueItem.id && p.size.name === uniqueItem.size.name)
        const quantity = inventory.filter(item => item.id === uniqueItem.id && item.size.name === uniqueItem.size.name).length || 0;
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'VND',
                    product_data: {
                        _id: productInfo.productId,
                        name: productInfo.productTitle,
                        description: productInfo.size.name,
                    },
                    unit_amount: productInfo.productPrice
                }
            })
        }
    }

    const shippingFeeSetting = await Setting.findOne({ name: 'shippingFee' })
    const shippingFeeCents = parseInt(shippingFeeSetting.value || '0')
    const orderDoc = await Order.create({
        line_items, name, email, phone, address, shippingFee: shippingFeeCents, paid: false,
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
        metadata: { orderId: orderDoc._id.toString() },
        allow_promotion_codes: true,
        shipping_options: [
            {
                shipping_rate_data: {
                    display_name: 'Shipping fee',
                    type: 'fixed_amount',
                    fixed_amount: { amount: shippingFeeCents, currency: 'VND' },
                }
            }
        ]
    })

    res.json({ url: session.url })
}