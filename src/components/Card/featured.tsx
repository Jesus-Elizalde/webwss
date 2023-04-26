import React from "react";
import Card from ".";

const FeaturedCarousel = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Just In</h1>
        <div className="carousel-center carousel rounded-box space-x-4 p-4 max-[640px]:max-w-xs lg:w-full">
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
