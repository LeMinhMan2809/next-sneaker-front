import Carousel from "@/components/Carousel"
import Featured from "@/components/Featured"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import NewProduct from "@/components/NewProduct"
import mongooseConnect from "@/lib/mongoose"
import { Product } from "@/models/Product"
 
export default function Home(product, newProducts) {
  //  console.log({newProducts})
  return (
    <div>
      <Header/>
      <Navbar/>
      <Featured product = {product} />
      <NewProduct products = {newProducts}/>
    </div>
  )
}

export async function getServerSideProps () {
  await mongooseConnect()
  const featuredProductId = '6513e061b6c115c54537d63b'
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 3})
  return {
    props: {
      featuredProduct:  JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },

  }
}
