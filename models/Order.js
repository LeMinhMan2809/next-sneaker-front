const { Schema, models, model } = require("mongoose");

const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    phone: String,
    address: String,
    paid: Boolean,
})

export const Order = models?.Order || model('Order', OrderSchema);