// "use client";
// import React, { useState } from "react";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import useAuth from "../hooks/useauth";

// interface Product {
//   text: string;
//   logo: string;
// }

// const products: Product[] = [
//   {
//     text: "1+1 Offer",
//     logo: "https://images.unidays.world/i/a6b09527-34f7-47d9-88e1-161ca92c8a5d?format=raw",
//   },
//   {
//     text: "25% Off",
//     logo: "https://images.unidays.world/i/d678953d-52e0-4928-a2be-e26fe002c43c?format=raw",
//   },
//   {
//     text: "10% off",
//     logo: "https://images.unidays.world/i/91d969ae-63b0-4217-a4bb-0811f4716460?format=raw",
//   },
//   {
//     text: "99% off",
//     logo: "https://images.unidays.world/i/5e23a882-2bdf-489e-a6e0-2a4f66f5f538?format=raw",
//   },
// ];

// const Page: React.FC = () => {
//   const [selected, setSelected] = useState<string>("Select the brand");
//   const [counts, setCounts] = useState<{ [key: string]: number }>({});
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/joinus");
//     }
//   }, [user, loading, router]);

//   if (loading) return;
//   <div className="z-20 w-full h-full flex justify-center items-center">
//     <img src="loading.svg" className="size-20" alt="loading...." />
//   </div>;

 

//   const handleIncrement = (productName: string) => {
//     setCounts((prev) => ({
//       ...prev,
//       [productName]: (prev[productName] || 0) + 1,
//     }));
//   };

//   const handleDecrement = (productName: string) => {
//     setCounts((prev) => ({
//       ...prev,
//       [productName]: Math.max((prev[productName] || 0) - 1, 0),
//     }));
//   };

//   return (
//     <div className="p-4 mt-16">
//       <section className="flex flex-col border-2 p-4 mb-8 rounded-lg shadow-md">
//         <p className="font-semibold">Name:</p>
//         <p className="font-semibold">College:</p>
//         <p className="font-semibold">Email:</p>
//         <p className="font-semibold">Phone No:</p>
//       </section>

//       <section className="flex justify-center mb-10">
//         <Menu as="div" className="relative inline-block">
//           <MenuButton className="font-semibold inline-flex items-center gap-x-2 rounded-md bg-white px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//             {selected}
//             <ChevronDownIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
//           </MenuButton>
//           <MenuItems className="absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5">
//             {["Habitate", "Vijay Sales", "AudioCup", "Bajaj Electronics", "Reliance Digital"].map(
//               (brand) => (
//                 <MenuItem key={brand}>
//                   <button
//                     onClick={() => setSelected(brand)}
//                     className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     {brand}
//                   </button>
//                 </MenuItem>
//               )
//             )}
//           </MenuItems>
//         </Menu>
//       </section>

//       <section className="grid grid-cols-2 gap-6">
//         {products.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center border rounded-lg shadow-md p-4 bg-white"
//           >
//             <img
//               src={item.logo}
//               alt={item.text}
//               className="h-32 w-32 object-contain rounded-md mb-4"
//             />
//             <p className="font-bold text-lg text-center mb-4">{item.text}</p>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => handleDecrement(item.text)}
//                 className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
//               >
//                 -
//               </button>
//               <span className="text-lg font-semibold">{counts[item.text] || 0}</span>
//               <button
//                 onClick={() => handleIncrement(item.text)}
//                 className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         ))}
//       </section>
//       <div className="w-full justify-center flex mt-5">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;



"use client";
import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useauth";
import QRCode from "react-qr-code";

interface Product {
  text: string;
  logo: string;
}

const products: Product[] = [
  {
    text: "1+1 Offer",
    logo: "https://images.unidays.world/i/a6b09527-34f7-47d9-88e1-161ca92c8a5d?format=raw",
  },
  {
    text: "25% Off",
    logo: "https://images.unidays.world/i/d678953d-52e0-4928-a2be-e26fe002c43c?format=raw",
  },
  {
    text: "10% off",
    logo: "https://images.unidays.world/i/91d969ae-63b0-4217-a4bb-0811f4716460?format=raw",
  },
  {
    text: "99% off",
    logo: "https://images.unidays.world/i/5e23a882-2bdf-489e-a6e0-2a4f66f5f538?format=raw",
  },
];

const Page: React.FC = () => {
  const [selected, setSelected] = useState<string>("Select the brand");
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [showQR, setShowQR] = useState<boolean>(false);
  const [qrCodeData, setQRCodeData] = useState<string>("");
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/joinus");
    }
  }, [user, loading, router]);

  if (loading)
    return (
      <div className="z-20 w-full h-full flex justify-center items-center">
        <img src="loading.svg" className="size-20" alt="loading...." />
      </div>
    );

  const handleIncrement = (productName: string) => {
    setCounts((prev) => ({
      ...prev,
      [productName]: (prev[productName] || 0) + 1,
    }));
  };

  const handleDecrement = (productName: string) => {
    setCounts((prev) => ({
      ...prev,
      [productName]: Math.max((prev[productName] || 0) - 1, 0),
    }));
  };

  const handleCheckout = async () => {
    const checkoutData = {
      user: {
        name: user?.name || "John Doe",
        college: user?.college || "Default College",
        email: user?.email || "example@mail.com",
        phone: user?.phone || "1234567890",
      },
      selectedBrand: selected,
      selectedProducts: Object.entries(counts).map(([product, count]) => ({
        product,
        count,
      })),
    };

    const qrData = JSON.stringify(checkoutData);
    setQRCodeData(qrData);
    setShowQR(true);

    try {
      const response = await fetch("https://student-discount.fk4460467.workers.dev/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...checkoutData, qrCode: qrData }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to the database");
      }
      console.log("Data successfully sent to the database!");
    } catch (error) {
      console.error("Error sending data to the database:", error);
    }
  };

  if (showQR) {
    return (
      <div className="flex flex-col items-center mt-16">
        <section className="flex flex-col border-2 p-4 mb-8 rounded-lg shadow-md">
          <p className="font-semibold">Name: {user?.name || "John Doe"}</p>
          <p className="font-semibold">College: {user?.college || "Default College"}</p>
          <p className="font-semibold">Email: {user?.email || "example@mail.com"}</p>
          <p className="font-semibold">Phone No: {user?.phone || "1234567890"}</p>
        </section>
        <div className="mb-8">
          <QRCode value={qrCodeData} size={256} />
        </div>
        <p className="font-semibold text-lg text-center">
          Thank you for your order! Use this QR code for verification.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 mt-16">
      <section className="flex flex-col border-2 p-4 mb-8 rounded-lg shadow-md">
        <p className="font-semibold">Name:</p>
        <p className="font-semibold">College:</p>
        <p className="font-semibold">Email:</p>
        <p className="font-semibold">Phone No:</p>
      </section>

      <section className="flex justify-center mb-10">
        <Menu as="div" className="relative inline-block">
          <MenuButton className="font-semibold inline-flex items-center gap-x-2 rounded-md bg-white px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {selected}
            <ChevronDownIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
          </MenuButton>
          <MenuItems className="absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5">
            {["Habitate", "Vijay Sales", "AudioCup", "Bajaj Electronics", "Reliance Digital"].map(
              (brand) => (
                <MenuItem key={brand}>
                  <button
                    onClick={() => setSelected(brand)}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {brand}
                  </button>
                </MenuItem>
              )
            )}
          </MenuItems>
        </Menu>
      </section>

      <section className="grid grid-cols-2 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-lg shadow-md p-4 bg-white"
          >
            <img
              src={item.logo}
              alt={item.text}
              className="h-32 w-32 object-contain rounded-md mb-4"
            />
            <p className="font-bold text-lg text-center mb-4">{item.text}</p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleDecrement(item.text)}
                className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{counts[item.text] || 0}</span>
              <button
                onClick={() => handleIncrement(item.text)}
                className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </section>
      <div className="w-full justify-center flex mt-5">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Page;
