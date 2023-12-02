import { useEffect } from "react"
import ProductBox from "./ProductBox"
export default function FilterProduct({ products }) {
    return (
        <div>
            {products.length <= 0 ? <h1 className="text-3xl pt-10 text-center">Không tìm thấy kết quả nào</h1> : <h1 className="text-3xl pt-10 text-center">Sản phẩm tìm kiếm</h1>}
            
            <div className="mt-5 grid grid-cols-3 gap-5 pt-5">
                {products?.length > 0 && products.map((i, index) => (
                    <ProductBox key={index} {...i.product} InventoryID={i._id} size={i.size} price={i.price} />                      
                ))}
            </div>
        </div>
       
    )
}