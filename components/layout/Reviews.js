import { reviewList } from "../../public/constants/reviewList";
// import Swiper core and required modules

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = (prop) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {reviewList.map(({ name, review, type, url }) => (
        <SwiperSlide key={name}>
          <div className="text-center">
            <h1 className="text-xl mb-1 sm:mb-2 text-mezo-white  font-bold first-letter:capitalize">
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </h1>
            <h2 className="text-mezo-white  px-6 sm:px-0">{review}</h2>
            <h4 className=" font-medium mt-3 text-sm mb-10">{type}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Reviews;
