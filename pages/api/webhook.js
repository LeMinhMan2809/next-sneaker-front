import { mongooseConnect } from "@/lib/mongoose";
import { Inventory } from "@/models/Inventory";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
import { buffer } from "micro";
const stripe = require("stripe")(process.env.STRIPE_SK);

const endpoint_secret = 'whsec_5786e08d5a6c0fb2fe4b6e26050adb8c338d0f467ddf021b5f2d1216abc65a9f'

export default async function handler(req, res) {
    await mongooseConnect()
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpoint_secret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const data = event.data.object;
            // Then define and call a function to handle the event payment_intent.succeeded
            const orderId = data.metadata.orderId
            const paid = data.payment_status === 'paid'
            // if (orderId && paid) {
            //     await Order.findByIdAndUpdate(orderId, {
            //         paid: true,
            //         discount_amount: data.total_details.amount_discount,
            //     })
            // }
            // const li = await OrderDetail.findOne({ order: orderId })
            // let pid = []
            // for (let i = 0; i < li.line_items.length; i++) {
            //     pid.push({
            //         _id: li.line_items[i].price_data.product_data.description.toString(),
            //         quantity: li.line_items[i].quantity,
            //     })
            // }
            // for (let i = 0; i < pid.length; i++) {
            //     await Inventory.updateOne({ _id: pid[i] }, {
            //         $inc: { quantity: -pid[i].quantity }
            //     })
            // }
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    res.status(200).send('ok')
}

export const config = {
    api: {
        bodyParser: false
    }
}

