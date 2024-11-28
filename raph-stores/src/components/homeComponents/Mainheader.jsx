import React, { useContext } from "react";
import { BsHouse } from "react-icons/bs";
import { BsEnvelopePlus } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import image12 from "../../assets/logo.jpg";


const Mainheader = () => {
  const { itemAmount } = useContext(ProductContext)

  return (
    <div className="flex  justify-between  sticky top-0 z-50 bg-white py-5 px-20">
      <h1 className="text-zinc-950 font-mono text-5xl font-extrabold">RAPH STORES</h1>
      {/* <img className="w-1/12 h-1/6 items-start" src={image12} alt="logo" /> */}
      {/* <div className="flex w-4/5 items-end">
        <div>
          <span><BsHouse /></span>
          <span><p> Nigeria</p></span>
        </div>
        <div>
          <BsEnvelopePlus />
          <p>Sales@RaphStores.com</p>

        </div>
        <div>
          <FaRegPaperPlane />
          <p>Free Delivery</p>

        </div>
      </div> */}

      <div className="relative">
        <Link to='/cart'>
          <BsCart4 />

          <span className="absolute bg-red-600 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center  right-1/2 ">{itemAmount}</span>
        </Link>
      </div>
    </div>
  );
};
export default Mainheader;
