import mongooseConnect from "@/lib/mongoose"
import { Inventory } from "@/models/Inventory"
import { Product } from "@/models/Product"

export default async function handle (req, res){
    await mongooseConnect()
    const ids = req.body.ids
    res.json(await Inventory.find({ _id: ids}).populate('product'))
}