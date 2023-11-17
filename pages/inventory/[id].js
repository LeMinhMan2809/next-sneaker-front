import { Inventory } from "@/models/Inventory";
import { Product } from "@/models/Product"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import mongooseConnect from "@/lib/mongoose"
import { useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";



export default function ProductPage ({inventory}){
    const [size, setSize] = useState('')
    const {setCartProducts} = useContext(CartContext);

    useEffect (() => {
        console.log(size)
    },[size])
    function addToCart () {
        console.log('Hi')
        const id = inventory._id
        setCartProducts(prev => [...prev, { id, size }]);
    }

    return (
        <div>
            <Header/>
            <Navbar/>

            <div>
                <div>
                    <div>
                        <img src={inventory.product.images[0]} />
                        {inventory.size.map((s, index) => (
                            <div key={index} className="border-2 w-fit px-5 py-5">
                                <button onClick={ev => setSize(s)}>{s.name}</button>
                                
                            </div>
                        ))}
                    </div>
                        
                    <div className="mt-3">
                        <button onClick={addToCart}>Thêm vào giỏ hàng</button>
                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
        

    )
}

export async function getServerSideProps (context){
    await mongooseConnect()
    const {id} = context.query  
    const inventory = await Inventory.findOne({_id:id}).populate('product')
    return {
        props: {
            inventory: JSON.parse(JSON.stringify(inventory))
        }
    }
}