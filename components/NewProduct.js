import ProductBox from "./ProductBox"
export default function NewProduct({ products }) {
    return (
        <div className="mt-5">
            {products?.length > 0 && products.map((i, index) => (
                <ProductBox key={index} {...i.product} />
            ))}
        </div>
    )
}
