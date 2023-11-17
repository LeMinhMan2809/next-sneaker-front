const { Schema, model, models, default: mongoose } = require("mongoose")

const InventorySchema = new Schema({
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    totalQuantity: { type: Number, required: true },
    size: [{ type: Object }],
    price: { type: Number, required: true },
}, {
    timestamps: true,
})

export const Inventory = models.Inventory || model("Inventory", InventorySchema); 