import Carousel from "@/components/Carousel"
import Featured from "@/components/Featured"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import NewProduct from "@/components/NewProduct"
import mongooseConnect from "@/lib/mongoose"
import { Setting } from "@/models/Setting"
import { Inventory } from "@/models/Inventory"
import { Product } from "@/models/Product"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react";
import FilterProduct from "@/components/FilterProduct"

export default function Home({ featuredProduct, newProducts, allProducts }) {

  const [searchText, setSearchText] = useState('')
  const [filterProduct, setFilterProduct] = useState(allProducts)

  useEffect(() => {
    // console.log(allProducts)
    setFilterProduct(allProducts.filter(f => {
      return f.product.title.toLowerCase().includes(searchText.toLowerCase())
    }))
  }, [searchText])

  return (
    <div>
      <Header setSearchText={setSearchText} />
      <Navbar />
      {!searchText && (
        <div>
          <Featured inventory={featuredProduct.product} />
          <NewProduct products={newProducts} />
        </div>
      )}
      {searchText && (
        <div>
          <FilterProduct products={filterProduct} />
        </div>
      )}
      {/* <Carousel /> */}
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  await mongooseConnect()
  const featuredProductSetting = await Setting.findOne({ name: 'featuredProductId' })
  const featuredProductId = featuredProductSetting.value
  const featuredProduct = await Inventory.findOne({ product: featuredProductId }).populate('product')
  const newProducts = await Inventory.find({}, null, { sort: { '_id': -1 }, limit: 8 }).populate('product')
  const allProducts = await Inventory.find({}).populate('product')
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
    },

  }
}
