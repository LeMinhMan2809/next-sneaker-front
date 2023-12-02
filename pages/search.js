import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import mongooseConnect from "@/lib/mongoose";
import { Inventory } from "@/models/Inventory";
export default function Search () {
    console.log(inventory)
    return (
        <div>
            <Header />
            <Navbar />

            <div>
                
            </div>


        </div>
        
    )
}

export async function getServerSideProps (context){
    await mongooseConnect()
    const inventory = await Inventory.find({}, null, { sort: { '_id': -1 }}).populate('product')
    return {
        props: {
            inventory: JSON.parse(JSON.stringify(inventory))
            
        }
    }
    //Fetch data from inventory

    
}