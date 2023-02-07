import React from 'react'
import './portfolio.css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent projects</span>
        <span>Portfolio</span>


        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>

            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        


        </Swiper>

    </div>
    
  )
}

export default Portfolio