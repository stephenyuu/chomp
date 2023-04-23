import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import RxCard from "./rx-card";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

const SearchResultsCarousel = ({ rxs }) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
    >
      {rxs.map((rx) => (
        <SwiperSlide key={rx.id}>
          <RxCard rx={rx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SearchResultsCarousel;
