import Image from "next/image";
import Swiper from "./components/swiper";
import Link from "next/link";
import SwiperB from "./components/swiperbrands";
let brands = [
  "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s",
  "https://thumbs.dreamstime.com/b/web-183282273.jpg",
  "https://thumbs.dreamstime.com/b/web-183282273.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjLWhWpx9PfbzysffLbMA_DK_8jawJAVHbw&s",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
];
const data = [
  {
    img: "https://images.unidays.world/i/perks/native/twoxone/9dcac4da-d4cb-41b1-a77d-767494f188eb?format=webp&w=382&h=302",
    text: "1+1 Offer",
    logo: "https://images.unidays.world/i/a6b09527-34f7-47d9-88e1-161ca92c8a5d?format=raw",
  },
  {
    img: "https://images.unidays.world/i/perks/native/twoxone/661d64b8-8c1e-4aa4-9c5a-d8403612feed?format=webp&w=382&h=302",
    text: "25% Off on laptops",
    logo: "https://images.unidays.world/i/d678953d-52e0-4928-a2be-e26fe002c43c?format=raw",
  },
  {
    img: "https://images.unidays.world/i/perks/native/twoxone/c1b4c3f2-78c2-4b97-8186-237ad3a524bd?format=webp&w=382&h=302",
    text: "10% off on Iphones",
    logo: "https://images.unidays.world/i/91d969ae-63b0-4217-a4bb-0811f4716460?format=raw",
  },
  {
    img: "https://images.unidays.world/i/perks/native/twoxone/9431d235-ca2a-4b59-8903-6a272eaf20bb?format=webp&w=382&h=302",
    text: "99% off on premium Supscription",
    logo: "https://images.unidays.world/i/5e23a882-2bdf-489e-a6e0-2a4f66f5f538?format=raw",
  },
  { img: "", text: "", logo: "" },
  { img: "", text: "", logo: "" },
  { img: "", text: "", logo: "" },
];

export default function Home() {
  return (
    <div>     
      <Swiper/>
      <div className="brands">
          <div className=" flex justify-between mx-4">
            <p className="font-bold text-xl">Explore more</p>
            {/* <Link href={"/brands"}> */}
            {/* </Link> */}
          </div>
          <SwiperB/>
          {/* <div className="flex gap-2 mt-1 overflow-x-scroll ml-3 scrollbar-hide">
            {brands.map((item, index) => (
              <div key={index} className="flex-shrink-0 ">
                <img
                  src={brands[index]}
                  alt="image"
                  className="h-14 rounded-full"
                />
              </div>
            ))}
          </div> */}

        </div>
        <div className="body flex flex-wrap justify-between space-y-10 gap-6 mx-4   mt-10">
        {data.map((item, index) => (
          <div key={index} className="">
            <div className=" rounded-2xl  bg-white w-[90vw] shadow-lg">
              <img src={item.img} className="rounded-t-2xl " alt="" />
              <div className="">
              <img src={item.logo} className="h-10 w-full" alt="" />
              <p className="font-bold h-10 text-center">{item.text}</p>
              <div className="flex justify-center w-full h-fit">
              <button className=" border-blue-600 border-2 m-2 h-[5vh]  w-[23vw] p-1 font-semibold rounded-sm  bg-slate-50 text-sm">
                Get Offer
              </button>
              </div>
              
              </div>       
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
