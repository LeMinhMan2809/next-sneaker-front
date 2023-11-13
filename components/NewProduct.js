import ProductBox from "./ProductBox"
export default function NewProduct({ products }) {
    return (
        <div className="my-8 bg-[#f7f7f9] px-8 py-12">
            <h2 className="text-center text-3xl font-bold">SẢN PHẨM MỚI</h2>
            <div className="mt-5 grid grid-cols-3 gap-4 justify-center items-center ">
                {products?.length > 0 && products.map((product, index) => (
                    <ProductBox key={index} {...product} />
                )
                )}
            </div>
        </div>
    )
}
