import { useContext } from "react";
import Center from "./Center";
import { CartContext } from "./CartContext";

export default function Featured({ inventory }) {
    const {setCartProducts} = useContext(CartContext);

    function addFeaturedToCart() {
        setCartProducts(prev => [...prev, inventory._id]);
    }

    return (
        <div className="bg-[#222] text-white py-10">
            <Center>
                <div className="grid grid-cols-2 gap-1 ">
                    <div className="pl-20 pt-[150px] justify-center items-center ">
                        <h1 className="text-4xl font-semibold">Super Pro</h1>
                        <p className="text-2xl">dasssssssssdasda</p>
                        <button onClick={addFeaturedToCart} className="mt-3 p-3 font-semibold bg-green-300 rounded-xl">Mua ngay</button>
                    </div>

                    <div className="flex items-center justify-center">
                        <img className=" h-[300px]" src="/img/AF1rm.png" />
                    </div>
                </div>
                
            
           </Center>
        </div>
    )
}