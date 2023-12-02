import mongooseConnect from "@/lib/mongoose"
import { Category } from "@/models/Category"
import Link from "next/link"
import { useEffect } from "react"
export default function Navbar( {rootCategory} ) {
    useEffect(() => {
        console.log(rootCategory)
    }, [rootCategory])
    return (
        <div className="mt-4 bg-black p-3 mb-4">
                <nav>
                    <ul className="flex text-white justify-center items-center">
                        
                        <li className="">
                            <Link href="/">Trang chủ</Link>
                        </li>
                        <li className="">
                            <Link href="/nike">
                                Nike
                            </Link>
                        </li>
                        <li className="">
                            <a href="">Adidas</a>
                        </li>
                        <li className="">
                            <a href="">Converse</a>
                        </li>
 
                    </ul>
                </nav>
            </div>
    )
}

export async function getServerSideProps() {
  await mongooseConnect()
  const rootCategory = await Category.find({ parent: null })
  console.log(rootCategory)
  return {
    props: {
      rootCategory: JSON.parse(JSON.stringify(rootCategory)),
    },
  }
}