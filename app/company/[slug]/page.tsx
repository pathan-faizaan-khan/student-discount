"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { useEffect , useState } from 'react';
import Link from 'next/link';
export const runtime = "edge";
const page = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.studentdiscountteam.workers.dev/brands", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const { slug } = useParams();

  return (
    <div className=' xl:mx-10'>
      <div className="mbanner rounded-3xl shadow-xl overflow-hidden mx-4 mt-16 xl:flex xl:justify-center ">
                <img
                  src={Data[0]?.imgurl}
                  alt="image"
                  className="bg-contain object-cover w-full h-auto xl:h-[60vh] xl:w-[60vw]  rounded-3xl mt-6"
                /> 
                <div className="flex justify-center w-full h-fit">
              <Link href={"/checkout"}>
              <button className="border-blue-600 border-2 m-2 h-[5vh]  w-[43vw] xl:w-[11vw] p-1 font-semibold rounded-sm  bg-slate-50 text-sm">
                Avail Discount
              </button>
              </Link>
              </div>     
        </div>
        <p className='font-semibold m-4 text-xl mt-16'>Similar Products From {slug}</p>

        <div className="body flex flex-wrap justify-between space-y-10 xl:space-y-1 gap-6 mx-4   mt-10">
        {Data.map((item, index) => (
          <div key={index} className="">
            <div className=" rounded-2xl  bg-white w-[90vw] xl:w-[40vw] shadow-lg">
              <img src={item.imgurl} className="rounded-t-2xl w-full h-full" alt="" />
              <div className="">
              {/* <img src={item.logo} className="h-10 xl:h-20 xl:w-full" alt="" /> */}
              {/* <p className="font-bold h-10 text-center xl:text-xl">{item.text}</p> */}
              <div className="flex justify-center w-full h-fit">
              <Link href={"/checkout"}>
              <button className="border-blue-600 border-2 m-2 h-[5vh]  w-[23vw] xl:w-[11vw] p-1 font-semibold rounded-sm  bg-slate-50 text-sm">
                Get Offer
              </button>
              </Link>
              </div>
              
              </div>       
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
