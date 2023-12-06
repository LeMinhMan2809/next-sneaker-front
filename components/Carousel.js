{/* <script src="./node_modules/preline/dist/preline.js"></script> */}
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


export default function Carousell() {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className='flex items-center justify-center'><img className='' src='/logo/nike_logo.png'></img></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </>
)        
}