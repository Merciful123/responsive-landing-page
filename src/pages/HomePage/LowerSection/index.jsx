import React, { useEffect, useState } from "react";
import image1 from "../../../assets/LowerSection/23761076_6870525.png";
import image2 from "../../../assets/LowerSection/32274338_7922931 (1).png";
import image3 from "../../../assets/LowerSection/35306335_8279908.png";

// swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

export const LowerSectionCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const imageData = [{
    id: 1,
    url: image1,
  },
    {
      id: 2, 
      url: image2
    }, {
      id: 3,
      url: image3
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesPerView(3);
      } else if (screenWidth >= 992) {
        setSlidesPerView(3);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2);
      } else if (screenWidth >= 576) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center lowersection-parent-container mx-auto my-4">
      <Swiper
        // install Swiper modules
        id="lower"
        modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        // speed={1000}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={image1} alt="" className="w-100  lower-section-carousel " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" className="  w-100 lower-section-carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" className="  w-100 lower-section-carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="" className=" w-100 lower-section-carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" className="  w-100 lower-section-carousel" />
        </SwiperSlide>
        {/* ... */}
      </Swiper>
    </div>
  );
};
