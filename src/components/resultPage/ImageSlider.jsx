"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ImageSlider.css"

const ImageSlider = () => {
  const data = [
    { id: 0, src: "/images/result/slider/1.jfif" },
    { id: 1, src: "/images/result/slider/2.jfif" },
    { id: 2, src: "/images/result/slider/3.jfif" },
  ];
  return (
    <div className="w-full  py-5">
      <Swiper
        pagination={true}
        centeredSlides={true} 
        initialSlide={Math.floor(data.length / 2)} 
        modules={[Pagination]}
        spaceBetween={22}
        slidesPerView={1.19}
        className="mySwiper "
        dir="ltr"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full  py-5 flex flex-col justify-start items-center gap-2">
              <img
                src={item.src}
                alt="image"
                className="w-full border-2 border-primaryColor rounded-xl"
              />
              <p className="self-start text-secondaryColor text-lg">$1,466,000</p>
              <div
                className="self-start flex justify-start items-center gap-2 text-sm"
                dir="ltr"
              >
                <img
                  src="/images/result/slider/icons8-bed-100 1.png"
                  alt="اتاق خواب"
                  className="w-5 h-5"
                />
                <p className="text-[#737373]">5bd</p>
                <img
                  src="/images/result/slider/icons8-bathroom-100 1.png"
                  alt="حمام"
                  className="w-5 h-5"
                />
                <p className="text-[#737373]">3bd</p>
                <img
                  src="/images/result/slider/icons8-bathroom-100 2.png"
                  alt="مساحت"
                  className="w-4 h-4"
                />
                <p className="text-[#737373]">1200 sqft</p>
                <img
                  src="/images/result/slider/icons8-bathroom-100 3.png"
                  alt="ارتفاع"
                  className="w-4 h-4"
                />
                <p className="text-[#737373]">2Lvl</p>
                
              </div>
              <p className="self-start text-sm">1290 Queens Ave, West Vancouver</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
