import React from 'react';
import Style from '../css/Style.module.css';
import {Pagination, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Slide(props) {
  return (
    <>
      <article className={Style.slide}>
        <Swiper 
          modules={[Pagination, Autoplay]}
          slidePerView={1}
          autoplay={{delay:3000}}
          pagination={{clickalbe:true}}
          >
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide01.jpg`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide02.jpg`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide03.jpg`} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/images/slide04.jpg`} alt="" />
            </SwiperSlide>


        </Swiper>
      </article>

    </>
  );
}

export default Slide;