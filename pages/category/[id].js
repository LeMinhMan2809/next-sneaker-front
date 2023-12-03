import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import axios from "axios"

export default function CategoryPage () {
    const [found, setFound] = useState(false)
    useEffect(() => {
        const router = useRouter()
        const { id } = router.query
        axios.get(`/api/category?id=${id}`).then(response => {
            console.log(response.data)
        })
    }, [])
    return (
        <div>
            <h1>Category Page</h1>
        </div>
    )
}
