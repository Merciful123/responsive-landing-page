import React, { useEffect, useState } from "react";
import "./index.css";
import pic1 from "../../../assets/Categories/pic1.png";
import pic2 from "../../../assets/Categories/pic2.png";
import pic3 from "../../../assets/Categories/pic3.png";
import pic4 from "../../../assets/Categories/pic4.png";
import pic5 from "../../../assets/FeatureImage/Image1.png";
import pic6 from "../../../assets/FeatureImage/Image2.png";
import pic7 from "../../../assets/FeatureImage/Image3.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CategoryCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesPerView(5);
      } else if (screenWidth >= 992) {
        setSlidesPerView(4);
      } else if (screenWidth >= 768) {
        setSlidesPerView(3);
      } else if (screenWidth >= 576) {
        setSlidesPerView(2);
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
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Pagination]}
      spaceBetween={5}
      slidesPerView={slidesPerView}
      navigation={true}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {/* <div className=" category-image-container relative">
          <img src={pic5} alt="" className="object-cover " />
          <div className="absolute bottom-0 left-0 right-0 bg-[#eaeaea] w-full   flex flex-col p-2 items-start text-[.9em] font-semibold category-carousel-link">
            <p>Wallpapers & emojis</p>
            <button className=" text-[.8em] card-btn-underline-style">
              Learn More
            </button>
          </div>
        </div> */}
        <div className="card category-image-container h-100 ">
          <img src={pic5} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">Wallpapers & emojis</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card category-image-container h-100">
          <img src={pic6} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">Courses</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card category-image-container h-100">
          <img src={pic7} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">How to Tutorials</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card category-image-container h-100">
          <img src={pic6} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">Templates</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card category-image-container h-100">
          <img src={pic5} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">Patterns</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card category-image-container h-100">
          <img src={pic6} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">Coaching & Mentorship</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card category-image-container h-100">
          <img src={pic5} className="card-img-top h-100" alt="..." />
          <div className="card-body category-carousel-link d-flex flex-column align-items-start p-2">
            <div className="card-text fw-bold">Courses</div>
            <button className="card-btn-underline-style">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      {/* ... */}
    </Swiper>
  );
};
