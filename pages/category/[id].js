import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import axios from "axios"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import ProductBox from "@/components/ProductBox"

export default function CategoryPage () {
    const router = useRouter()
    const { id } = router.query
    const [category, setCategory] = useState(null)
    const [products, setProducts] = useState([])
    const [loadingCateg, setLoadingCateg] = useState(false)
    const [loadingProduct, setLoadingProduct] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [filterProduct, setFilterProduct] = useState([])
    useEffect(() => {
        if (!id) {
            return
        }
        setLoadingCateg(true)        
        axios.get(`/api/category?id=${id}`).then(response => {
            setCategory(response.data)
            setLoadingCateg(false)
        })
    }, [id])

    useEffect(() => {
        if (!category) {
            return
        }
        setLoadingProduct(true)
        axios.get(`/api/product?category=${category._id}`).then(response => {
            setProducts(response.data)
            setLoadingProduct(false)
            setFilterProduct(response.data)
        })
    }, [category])

    useEffect(() => {
        setFilterProduct(products.filter(f => {
            return f.product.title.toLowerCase().includes(searchText.toLowerCase())
        }))
        console.log(filterProduct)
    }, [searchText])

    return (
        <div>
            <Header setSearchText={setSearchText}/> 
            <Navbar/>
            {loadingCateg ? 'Đang tải...' : <h1 className="text-3xl pt-9 text-center">Sản phẩm {category?.name}</h1>}
            {loadingProduct ? 'Đang tải...' : 
                <div> 
                    { products.length <= 0 ? <p className="text-3xl pt-10 text-center">Không có sản phẩm</p>:           
                    <div className="mt-5 grid grid-cols-3 gap-5 pt-5">
                        {products.map((p,index) => (
                            <div key={index} >                
                                <ProductBox InventoryID={p._id} {...p.product} price={p.price} size={p.size}>                                  
                                </ProductBox>        
                            </div>
                        ))}
                    </div>
                    }
                </div>
            } 
        </div>
    )
}
