import React from "react";

const FeaturedCarousel = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Just In</h1>
        <div className="carousel-center carousel rounded-box w-full max-w-full space-x-4 max-[640px]:max-w-xs"></div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
