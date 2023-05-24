
import React from 'react';
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swiperjs = ({children}) => {
 
  return (
    <div className="p-[2rem]">
      <Swiper
        
        spaceBetween={30}
    
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerGroup: 1,
              slidesPerView: 3,
            },
          }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper p-[2rem]"
      >
        
        
            <>
             {children}
            </>
        
        
      </Swiper>
    </div>
  );
};

export default Swiperjs;
