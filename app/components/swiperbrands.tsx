"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useState } from "react";

const Page: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = fetch("https://api.studentdiscountteam.workers.dev/brands", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="h-auto py-10 z-10 ">
      <div className="max-w-[90%] mx-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10} // Space between each logo
          slidesPerView={3} // Show 3 slides at a time
          slidesPerGroup={1} // Scroll one slide at a time
          autoplay={{ delay: 2000, reverseDirection: true }}
          loop
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div>
                <img
                  src={item.imgurl}
                  alt="brand logo"
                  className="h-14 rounded-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
