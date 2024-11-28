import React from "react";
import img2 from "../../assets/sales4.jpg";
import image2 from "../../assets/fortypercent.jpg";
import image3 from "../../assets/seventypercent.jpg";
import image4 from "../../assets/shoe.jpg";
import image5 from "../../assets/jewel.jpg";
import image6 from "../../assets/edo.jpg";
import image7 from "../../assets/pexels1.jpg"
import image8 from "../../assets/womentransformed.jpeg"

const Banner = () => {
    return (
        <div className="mt-3.5 mr-14 ">
            <img className="w-screen h-80 rounded" src={image8} alt="imageBanner" />
            <div className="flex gap-2 mt-2">
                <img className="h-52 w-1/2 rounded" src={image5} alt="imageBanner" />
                <img className="h-52 w-1/2 rounded" src={image4} alt="imageBanner" />
            </div>
        </div>
    );
};

export default Banner;
