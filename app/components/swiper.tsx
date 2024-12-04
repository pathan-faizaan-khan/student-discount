"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useState } from "react";


const Page: React.FC = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const data  = fetch("https://api.studentdiscountteam.workers.dev/banner", {method:"GET"},
        ).then((response) => response.json()).then((data) => setData(data));
    }, [])
    

  return (
    <div className="h-auto py-10 z-10 mt-6">
      <div className="max-w-[90%] mx-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`company/brand`}>
              <div className="mbanner   rounded-xl overflow-hidden">
                <img
                  src={item.imgurl}
                  alt="image"
                  className="bg-contain object-cover w-full h-auto rounded-t-xl mt-6"
                />
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
