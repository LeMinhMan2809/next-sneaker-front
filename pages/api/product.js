import mongooseConnect from "@/lib/mongoose"
import { Inventory } from "@/models/Inventory"

export default async function handle(req, res) {
    await mongooseConnect()
    if (req.method === 'GET') {
       if(req.query.category){
        //const products = await Inventory.find({ category: req.query.category }).populate('product')
        const products = await Inventory.find({}).populate({
            path: 'product',
            match: { category: req.query.category }
            }).exec();

        const filteredInventory = products.filter(({ product }) => product !== null);  
        return res.json(filteredInventory)
       }     
    }    
}