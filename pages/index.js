import Carousel from "@/components/Carousel"
import Featured from "@/components/Featured"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import NewProduct from "@/components/NewProduct"
import mongooseConnect from "@/lib/mongoose"
import { Setting } from "@/models/Setting"
import { Inventory } from "@/models/Inventory"
import { Product } from "@/models/Product"

export default function Home({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Navbar />
      <Featured product={featuredProduct.product} />
      <NewProduct products={newProducts} />
    </div>
  )
}

export async function getServerSideProps() {
  await mongooseConnect()
  const featuredProductSetting = await Setting.findOne({ name: 'featuredProductId' })
  const featuredProductId = featuredProductSetting.value
  const featuredProduct = await Inventory.findOne({ product: featuredProductId }).populate('product')
  const newProducts = await Inventory.find({}, null, { sort: { '_id': -1 }, limit: 8 }).populate('product')
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },

  }
}
