import { Inventory } from "@/models/Inventory";
import { Product } from "@/models/Product"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import { CartContext } from "@/components/CartContext";
import mongooseConnect from "@/lib/mongoose"


export default function ProductPage ({inventory}){
    console.log(inventory)
    return (
        <div>
            <Header/>
            <Navbar/>

            <div>
                <div>
                    <div>
                        {/* <img src={inventory.product.images[0]} /> */}
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
    console.log(context.query)
    const inventory = await Inventory.findOne({_id:id}).populate('product')
    return {
        props: {
            inventory: JSON.parse(JSON.stringify(inventory))
        }
    }
}