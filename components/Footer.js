import Center from "./Center";
import Link from "next/link";
export default function Footer () {
    return (
        <div>
            <div className="bg-slate-200 p-4 mt-10 w-full"></div>
            <Center>
            
            <div className="mt-10">

                <div>
                    <div>
                        <div>
                            <p className="mb-4 font-semibold text-lg uppercase ml-2">Giới thiệu</p>

                            <Link className="flex" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Về chúng tôi
                            </Link>

                            <Link className="flex" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Tin tức 
                            </Link>

                            <Link className="flex" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Cửa hàng
                            </Link>
                           
                            <Link className="flex" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Khuyến mãi
                            </Link>
                          
                        </div>

                        <div>

                        </div>

                        <div>

                        </div>
                    </div>
                </div>   

            </div>
        </Center>
        </div>
        
        
    )
}