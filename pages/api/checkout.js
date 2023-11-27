import mongooseConnect from "@/lib/mongoose"
import { Inventory } from "@/models/Inventory"

export default async function handler(req, res) {
    if (req.method !== 'POST'){
        res.json('Should be a POST request')
        return
    }
    await mongooseConnect()
    const {name, email, phone, address, cartProducts} = req.body
    const inventoryIds = cartProducts
    const uniqueIds = [...new Set(inventoryIds)]
    const productsInfos = await Inventory.find({_id: uniqueIds}).populate('product')

    let line_items = []
    for (const inventoryId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === inventoryId )
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
}