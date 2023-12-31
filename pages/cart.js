import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Center from "@/components/Center"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/components/CartContext"
import axios from "axios"
export default function CartPage() {
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext)
    const [inventory, setInventory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    if (typeof window !== 'undefined' && window.location.search.includes('success=1')) {
        localStorage.clear('cart')
    }

    useEffect(() => {
        setIsLoading(true);
        if (cartProducts.length > 0) {
            axios.post('/api/cart', cartProducts)
                .then(response => {
                    setInventory(response.data)
                    setIsLoading(false)
                })
        }
        else {
            setInventory([])
        }
    }, [cartProducts])


    function moreOfThisProduct(id, size) {
        addProduct(id, size)
    }

    function lessOfThisProduct(id, size) {
        removeProduct(id, size)
        if (cartProducts.length <= 1) {
            localStorage.clear('cart')
        }
    }

    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name, email, phone, address, cartProducts
        })
        if (response.data.url) {
            window.location.href = response.data.url
        }
    }

    let total = 0
    for (const inv of cartProducts) {
        const price = inventory.find(i => i._id === inv.id && i.size.name === inv.size.name)?.price || 0
        total += price
        // const price = inventory.find(i => i._id === inventoryId )?.product.price
        // console.log(inventory.id)
        // 
    }

    return (
        <>
            <Header />
            <Navbar />
            <Center>
                <div className="grid grid-cols-2 gap-8 mt-10">

                    <div className="p-8 bg-slate-300 rounded-md">

                        <h2 className="text-3xl font-semibold mb-5 text-center">Thanh toán</h2>
                        {/* {console.log(cartProducts)} */}
                        {!cartProducts?.length && (
                            <h1 className="text-1xl">Giỏ hàng đang trống</h1>
                        )}
                        {cartProducts.length > 0 ? (
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
                                    {isLoading && (
                                        <tr>
                                            <td colSpan="4">Loading...</td>
                                        </tr>
                                    )}
                                    {!isLoading && inventory.map((i, index) => (
                                        <tr key={index}>
                                            <td>
                                                {/* {i.product._id} */}
                                                <img className="h-[100px]" src={i.product.images[0]} />
                                                {/* {i.product.title} : {cartProducts.filter(item => item._id === i.id && item.size.name === i.size.name).length} */}
                                            </td>
                                            <td>{i.size.name}</td>
                                            <td>
                                                <button onClick={() => lessOfThisProduct(i._id, i.size)} className="w-7 bg-gray-400 mr-2">-</button>
                                                {cartProducts.filter(item => item._id === i.id && item.size.name === i.size.name).length}
                                                <button onClick={() => moreOfThisProduct(i._id, i.size)} className="w-7 bg-gray-400 ml-2">+</button>
                                            </td>
                                            <td>{(cartProducts.filter(item => item._id === i.id && item.size.name === i.size.name).length * i.price).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="mt-3">Tổng cộng:</td>
                                        <td></td>
                                        <td></td>
                                        <td>{total.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : null}
                    </div>

                    {!!cartProducts?.length && (
                        <div className="p-8 bg-slate-300 rounded-md">
                            <h2 className="text-2xl font-semibold mb-5">Thông tin đơn hàng</h2>

                            <div>
                                <input placeholder="Họ và tên" type="text"
                                    className="input_cart" value={name} name="name"
                                    onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div>
                                <input placeholder="Email"
                                    className="input_cart" value={email} name="email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <input placeholder="Địa chỉ" type="text" className="input_cart"
                                    value={address} name="address"
                                    onChange={(e) => setAddress(e.target.value)} />
                            </div>

                            <div>
                                <input placeholder="Số điện thoại" className="input_cart"
                                    value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            {/* <input type="" name="products" value={cartProducts} /> */}

                            <button className="py-2 px-5 mt-3 bg-green-400 text-white" onClick={goToPayment}>Tiếp tục thanh toán</button>

                        </div>
                    )}
                </div>
            </Center>
        </>
    )

}