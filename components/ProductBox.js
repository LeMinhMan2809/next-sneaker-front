import { useContext } from "react"
import { CartContext } from "./CartContext"
import { useRouter } from "next/router"

export default function ProductBox({ InventoryID, _id, title, description, price, images, size  }) {
    const router = useRouter()
    function handleProductDetail(){
        router.push(`/inventory/${InventoryID}`)
    }

    return (
        <div className="bg-white border-2 ml-5 mr-5">
            <div className="flex justify-center flex-wrap wrap-5">
                <img className="h-[250px]" src={images?.[0]}/>
            </div>

            <div className="text-center pt-8 pb-5 text-xl">
                <p className="font-bold">{title}</p>               
                <p className="font-extralight text-red-500 pt-2s">{price} đ</p>               
                <button onClick = {handleProductDetail} className="py-2 px-4 border-2 mt-3 border-black rounded-lg hover:bg-slate-200" >
                    Chi tiết
                </button>
            </div>
            
        </div>
    )
}