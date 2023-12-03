import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
export default function Navbar() {
    const [rootCategory, setRootCategory] = useState([])
    useEffect(() => {
        axios.get('/api/category').then(response => {
            setRootCategory(response.data)
        })
    }, [])
    return (
        <div className="mt-4 bg-black p-3 mb-4">
            <nav>
                <ul className="flex text-white justify-center items-center">

                    <li className="">
                        <Link href="/">Trang chủ</Link>
                    </li>
                    {rootCategory.map((r, index) => (
                        <li key={index} className="ml-4">
                            <Link href={`/category/${r._id}`}>{r.name}</Link>
                        </li>
                    ))}
                    

                </ul>
            </nav>
        </div>
    )
}