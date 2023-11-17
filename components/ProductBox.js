import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function ProductBox({ InventoryId, _id, title, description, price, images, size  }) {
    const {addProduct} = useContext(CartContext)
    return (
        <div className="bg-white border-2">
            <div className="flex justify-center ">
                <img className="h-[250px]" src={images[0]}/>
            </div>

            <div className="text-center pt-8 pb-5 text-xl">
                <p className="font-bold">{title}</p>
                {size.map((s, index) => (
                    <p key={index} className="font-extralight pt-2s">{s.price}</p>
                ))}
                <button onClick = {()=> addProduct(InventoryId)} className="p-2 border-2 mt-3 border-black rounded-lg hover:bg-slate-200" >
                    Thêm vào giỏ hàng
                </button>
            </div>
            
        </div>
           
        
    )
}