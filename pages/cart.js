import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Center from "@/components/Center"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/components/CartContext"
import axios from "axios"
export default function CartPage() {
    const { cartProducts, addProduct } = useContext(CartContext)
    const [inventory, setInventory] = useState([])
    // console.log(cartProducts)
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', cartProducts)
                .then(response => {
                    setInventory(response.data)
                })
        }
    }, [cartProducts])


    function moreOfThisProduct(id) {
        addProduct(id)
    }

    return (
        <>
            <Header />
            <Navbar />
            <Center>
                <div className="grid grid-cols-2 gap-8 mt-10">

                    <div className="p-8 bg-slate-300 rounded-md">

                        <h2 className="text-3xl font-semibold mb-3">Thanh toán</h2>
                        {!cartProducts.length && (
                            <div>Giỏ hàng của bạn đang trống</div>
                        )}
                        {inventory?.length > 0 && (
                            <table className="cart_table">
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Size</th>
                                        <th>Số lượng</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <>
                                        {inventory.map((i, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img className="h-[100px]" src={i.product.images[0]} />
                                                    {/* {i.product.title} : {cartProducts.filter(item => item._id === i.id && item.size.name === i.size.name).length} */}
                                                </td>
                                                <td>{i.size.name}</td>
                                                <td>
                                                    <button className="w-7 bg-gray-400 mr-2">-</button>
                                                    {cartProducts.filter(item => item._id === i.id && item.size.name === i.size.name).length}
                                                    <button onClick={() => moreOfThisProduct(i.id) } className="w-7 bg-gray-400 ml-2">+</button>
                                                </td>
                                                {/* <td>{cartProducts.filter(id => id === i._id}</td> */}
                                                <td>{i.price}</td>
                                            </tr>
                                        ))}
                                    </>

                                </tbody>
                            </table>
                        )}
                    </div>

                    {!!cartProducts?.length && (
                        <div className="p-8 bg-slate-300 rounded-md">
                            <h2 className="text-2xl font-semibold">Thông tin đơn hàng</h2>
                            <button className="py-2 px-5 mt-3 bg-green-300 text-white">Tiếp tục mua hàng</button>
                        </div>
                    )}

                </div>






            </Center>



        </>
    )


}