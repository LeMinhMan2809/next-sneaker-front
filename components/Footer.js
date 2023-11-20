import Center from "./Center";
import Link from "next/link";
export default function Footer () {
    return (
        <div>
            <div className="bg-slate-200 p-4 mt-10 w-full"></div>
            <Center>
            
            <div className="mt-10 mb-10">

                <div>
                    <div className="flex gap-[7rem]">
                        {/* Col1 */}
                        <div> 
                            <p className="mb-4 font-semibold text-lg uppercase ml-2">Giới thiệu</p>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Về chúng tôi
                            </Link>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Tin tức 
                            </Link>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Cửa hàng
                            </Link>
                           
                            <Link className="flex" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Khuyến mãi
                            </Link>
                        
                        </div>
                        {/* Col2 */}
                        <div> 
                            <p className="mb-4 font-semibold text-lg uppercase ml-2">Thông tin</p>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Thông tin và quy định chung
                            </Link>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Quy định và hình thức thanh toán 
                            </Link>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Chính sách vận chuyển, giao nhận
                            </Link>
                           
                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Chính sách bảo hành - đổi/trả
                            </Link>                        
                        </div>

                        {/* Col3 */}
                        <div> 
                            <p className="mb-4 font-semibold text-lg uppercase ml-2">Hỗ trợ </p>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Hỗ trợ trực tuyến
                            </Link>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Đối tác 
                            </Link>

                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Tuyển dụng
                            </Link>
                           
                            <Link className="flex pb-2" href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mt-1 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />                               
                                </svg> 
                                Kiểm tra đơn hàng
                            </Link>                        
                        </div>

                        {/* Col4 */}

                        <div>
                            <p className="mb-4 font-semibold text-lg uppercase ml-2">Hỗ trợ thanh toán </p>
                            <div>
                                <img src="/logo/logopayment.jpg" />
                            </div>

                            <p className="mb-4 font-semibold text-lg uppercase ml-2">Follow Us</p>
                            <div className="flex">
                                <img className="mr-2" src="/logo/facebook.jpg" />
                                <img className="mr-2" src="/logo/instagram.jpg" />
                            </div>

                        </div>

                    </div>
                </div>   

            </div>
        </Center>
        </div>
        
        
    )
}