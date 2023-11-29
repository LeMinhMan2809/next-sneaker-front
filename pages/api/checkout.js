import mongooseConnect from "@/lib/mongoose"
import { Inventory } from "@/models/Inventory"
// import { Order } from "@/models/Order"
// const stripe = require('stripe')(process.env.STRIPE_SK);
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.json('Should be a POST request')
        return
    }
    await mongooseConnect()
    const { name, email, phone, address, cartProducts } = req.body
    const inventoryIds = cartProducts
    console.log(cartProducts)
    const uniqueIds = [...new Set(inventoryIds)]
    const productsInfos = await Inventory.find({ _id: uniqueIds }).populate('product')

    // console.log(uniqueIds)

    let line_items = []
    for (const inventoryId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === inventoryId)
        const quantity = inventoryIds.filter(id => id === inventoryId).length || 0
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'VND',
                    product_data: {
                        name: productInfo.product.title,
                        // description: 
                    },
                    unit_amount: quantity * productInfo.price
                }
            })
        }
    }
    res.json(line_items)

    // const orderDoc = await Order.create({
    //     line_items, name, email, phone, address, paid:false,
    // })

    // const session = await stripe.checkout.sessions.create({
    //     line_items,
    //     mode:'payment',
    //     customer_email: email,
    //     success_url: process.env.PUBLIC_URL + '/cart?success=1',
    //     cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
    //     metadata: {orderId: orderDoc._id.toString()}
    // })

    // res.json({url: session.url})
}