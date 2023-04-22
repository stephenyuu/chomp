import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./index.css";

const ImageCarousel = ({ rxPhotos }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      pagination
      autoplay={{ delay: 3000 }}
    >
      {rxPhotos.map((photo) => (
        <SwiperSlide>
          <div className="wd-rx-image">
            <img src={photo} 
            className="img-fluid border border-5 border-secondary rounded"/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
