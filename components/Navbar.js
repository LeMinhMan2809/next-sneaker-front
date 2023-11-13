import Link from "next/link"
export default function Navbar() {
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
                        <li className="">
                            <a href="">Khuyến mãi</a>
                        </li>

                    </ul>
                </nav>
            </div>
    )
}