import ProductBox from "./ProductBox"
export default function NewProduct({ products }) {
    console.log(products)
    return (
        <div>
             <h1 className="text-3xl pt-10 text-center">Sản phẩm giày</h1>
            <div className="mt-5 grid grid-cols-3 gap-5 pt-5">
                {products?.length > 0 && products.map((i, index) => (
                    <ProductBox key={index} {...i.product} InventoryID={i._id} size={i.size} />
                ))}
            </div>
        </div>
       
    )
}
