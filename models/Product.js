import mongoose, { model, Schema, models } from "mongoose"

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    images: [{ type: String }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

export const Product = models?.Product || model('Product', ProductSchema);