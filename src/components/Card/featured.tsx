import React from "react";
import Card from ".";

const FeaturedCarousel = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Just In</h1>
        <div className="w-full flex-wrap lg:flex lg:gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
