import { Inventory } from "@/models/Inventory";
import { Product } from "@/models/Product"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import mongooseConnect from "@/lib/mongoose"
import { useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";
import Center from "@/components/Center";



export default function ProductPage ({inventory}){
    const [size, setSize] = useState('')
    const {setCartProducts} = useContext(CartContext);

    useEffect (() => {
        console.log(inventory)
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
                <div className="mr-[150px] ml-[150px] px-4">
                    <div className="flex items-center">
                        <div>
                            <img className="h-[400px] w-[400px]" src={inventory.product.images[0]} />
                        </div>

                        <div className="w-[800px] pl-[50px]">
                            <h1 className="text-3xl font-semibold">{inventory.product.title}</h1>
                            <div>
                                <p className="mt-5">{inventory.product.description}</p>
                            </div>
                            <div className="flex gap-5 mt-5">
                                {inventory.size.map((s, index) => (
                                    <div key={index} className="border-2 w-fit px-4 py-3">
                                        <button onClick={ev => setSize(s)}>{s.name}</button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 w-[200px] text-white bg-red-500 py-2 px-5 text-center rounded-2xl hover:bg-black ">
                                <button onClick={addToCart}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>

                        

                    </div>
                    
                        
                    

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