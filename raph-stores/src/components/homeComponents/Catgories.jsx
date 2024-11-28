import React from "react";
import { Link } from "react-router-dom";
import { v4 } from 'uuid'
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GiPearlNecklace } from "react-icons/gi";
import { PiShirtFolded } from "react-icons/pi";
import { GiSkirt } from "react-icons/gi";
import { RiMenu3Line } from "react-icons/ri";


const Catgories = () => {
    const data = [
        {
            icon: <PiTelevisionSimpleBold />,
            name: 'Electronics and Accessories',
            route: '/electronicsandaccessories'
        },
        {
            icon: <GiPearlNecklace />,
            name: 'Jewelry',
            route: '/jewelry'
        },

        {
            icon: <PiShirtFolded />,
            name: 'Men Clothings',
            route: '/menclothings'
        },
        {
            icon: <GiSkirt />,
            name: 'Women Clothings',
            route: '/womenclothings'
        }
    ]
    return (

        <div className="ml-14 mt-3.5 h-130 w-1/3  px-1.5">
            <div className="flex  bg-zinc-800 py-5  h-16 items-start gap-3 ">
                <RiMenu3Line className="ml-2" color="white" size={28} />
                <h3 className=" font-bold text-white text-xl">
                    CATEGORIES
                </h3>
            </div>

            <ul className="space-y-4 divide-y-2 pt-2 ">
                {
                    data.map(el => (
                        <li key={v4()} >  <Link to={el.route}> {el.icon}{el.name}</Link></li>
                    ))
                }
                {/* 
                <li>Accessories</li>
                <li>Bag pack</li>
                <li>Men Clothings</li>
                <li>Women Clothings</li>
                <li>Electronics</li> */}
            </ul>
        </div>

    );
};
export default Catgories;
