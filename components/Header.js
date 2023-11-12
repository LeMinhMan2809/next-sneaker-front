import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Header() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll:1
    }
    return (
        <div>
            <div className="header">
                <div className="flex justify-between py-4 ml-10 mr-10 items-center">
                    <div>
                        <img className="w-[150px] h-[50px]" src="/img/logo.png"></img>
                    </div>

                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="items-center w-5 h-5 relative top-[15px] left-[280px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className="p-2 border-[3px] rounded-xl w-[300px] " type="text" placeholder="Tìm kiếm..."></input>
                    </div>

                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        <p className="mr-3">Đăng ký</p>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="mr-3">Đăng nhập</p>
                    </div>
                </div>
            </div>


            {/* Slider */}
            {/* <div className="slider block mt-5 ml-[200px]">
                
                    <div className="slide-track">
                        <Slider {...settings}>
                        <div className="slide">
                            <img src="/logo/nike_logo.png" />
                        </div>

                        <div className="slide">
                            <img src="/logo/adidas_logo.jpg" />
                        </div>

                        <div className="slide">
                           <img src="/logo/converse_logo.png" />
                        </div>

                        <div className="slide">
                            <img src="/logo/vans_logo.jpg" />
                        </div>

                        <div className="slide">
                            <img src="/logo/palladium.jpg" />
                        </div>
                        
                         <div className="slide">
                            <img src="/logo/kwiss.png" />
                        </div>
                        </Slider>                     
                    </div>         
            </div> */}
           


        </div>
    )
}