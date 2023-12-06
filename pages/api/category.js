import mongooseConnect from "@/lib/mongoose"
import { Category } from "@/models/Category"

export default async function handle(req, res) {
    await mongooseConnect()
    if (req.method === 'GET') {
        if(req.query.id) {
            const category = await Category.findById(req.query.id)
            return res.json(category)           
        }
        const categories = await Category.find({ parent: null })
        return res.json(categories)
    }
}