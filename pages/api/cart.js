import mongooseConnect from "@/lib/mongoose"
import { Inventory } from "@/models/Inventory"
import { Product } from "@/models/Product"


export default async function handle(req, res) {
    await mongooseConnect()
    const cartItems = req.body // assuming req.body is the array
    let result = [];
    for (let item of cartItems) {
        let inventoryItems = await Inventory.find({
            _id: item.id,
            'size.name': item.size.name
        }).populate('product');

        for (let inventoryItem of inventoryItems) {
            const size = inventoryItem.size.find(s => s.name === item.size.name);
            // Overwrite the size array with the single size object
            const newItem = { ...inventoryItem._doc, size };
            result.push(newItem);
        }
    }
    let uniqueItems = result.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t._id.toString() === item._id.toString() && t.size.name === item.size.name
        ))
    );
    res.json(uniqueItems);
}