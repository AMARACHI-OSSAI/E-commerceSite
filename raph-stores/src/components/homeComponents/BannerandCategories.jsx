import React from "react";
import Banner from "./Banner";
import Catgories from "./Catgories";

function BannerandCategories() {
  return (
    <div className="flex h-80 mb-72 divide-zinc-500 ">
      <Catgories />
      <Banner />
    </div>
  );
}

export default BannerandCategories;
