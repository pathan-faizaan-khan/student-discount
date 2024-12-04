import React from 'react'

const page = () => {
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
    const mbanner = [
        {
          src: "https://images.unidays.world/i/self-serve/content/offerbf3abf74-e113-4f44-a663-cc8830104e5c?h=450&format=webp",
          logo: "https://images.unidays.world/i/customers/mobile/active/e341a916-7c11-4c21-9d56-59eb3056dada?w=48&format=webp",
          title: "Apple Music Students Week",
          text: "Over 50% off on premium subscription",
        },
        {
          src: "https://images.unidays.world/i/self-serve/content/offer98fcc9f6-0046-42a0-968d-c5732fa4a468?h=450&format=webp",
          logo: "https://images.unidays.world/i/customers/mobile/active/299e7592-6fe5-4b77-a1c0-249f30a82a44?w=96&format=webp",
          text: "Top saving on Samsung Probook 6",
          title: "Special 10% off on laptops",
        },
        {
          src: "https://images.unidays.world/i/self-serve/content/offer36628fdb-c30d-4fdf-8ae6-0c7b7dd5d667?h=450&format=webp",
          logo: "https://images.unidays.world/i/self-serve/customer/y6ykdrOxJ0-dR3NKkSBJ5N8i-g5FCKZNm7nSbUjbv0c=/logo/png/a9e2339d-e8e6-48b8-b76a-f0281ed02d73?w=96&format=webp",
          title: "Get 20% off on all products",
          text: "Special offer on all products",
        },
      ];
  return (
    <div>
      <div className="mbanner   rounded-3xl overflow-hidden mx-4 mt-16">
                <img
                  src={mbanner[0].src}
                  alt="image"
                  className="bg-contain object-cover w-full h-auto rounded-t-3xl mt-6"
                />
               
        </div>
        <p className='font-semibold m-4 text-xl mt-16'>Similar Products</p>

        <div className="body flex flex-wrap justify-between space-y-10 gap-6 mx-4   mt-2">
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
  )
}

export default page
