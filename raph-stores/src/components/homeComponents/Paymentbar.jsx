import React from "react";
import { PiTruckTrailerBold } from "react-icons/pi";
import { IoIosLock } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

const Paymentbar = () => {
    return (
        <div className="flex  bg-zinc-400 justify-around h-30 py-2.5 mx-14">
            <div>
                <PiTruckTrailerBold size={40} />
                <h6>FREE SHIPPING</h6>
                <p>Free shipping on orders above $100 </p>
            </div>
            <div>
                <IoIosLock  size={40}/>
                <h6>SECURE PAYMENT</h6>
                <p>We value your security</p>
            </div>
            <div>
                <MdSupportAgent  size={40} />
                <h6>ONLINE SUPPORT</h6>
                <p>We have support 24/7</p>
            </div>
            <div>
                <BsCashCoin  size={40} />
                <h6>PAYMENT ON DELIVERY</h6>
                <p>Cash on delivery option</p>
            </div>
        </div>
    );
};

export default Paymentbar;
