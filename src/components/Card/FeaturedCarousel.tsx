import React from "react";
import FeaturedCard from "./FeaturedCard";
import { api } from "~/utils/api";

const FeaturedCarousel = () => {
  const { data: products } = api.product.getfiltered.useQuery({
    collectionName: "Featured",
  });
  console.log(
    "🚀 ~ file: featuredCarousel.tsx:9 ~ FeaturedCarousel ~ products:",
    products
  );

  return (
    <div className="carousel-center carousel max-w-max space-x-4 bg-neutral p-4">
      <div className="carousel-item">
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedCarousel;
