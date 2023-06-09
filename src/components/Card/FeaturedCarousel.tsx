import React from "react";
import FeaturedCard from "./FeaturedCard";
import { RouterOutputs, api } from "~/utils/api";

type Product = RouterOutputs["product"]["getfiltered"][0];

const FeaturedCarousel = () => {
  const { data: products } = api.product.getfiltered.useQuery({
    collectionName: "Featured",
  });
  console.log(
    "🚀 ~ file: featuredCarousel.tsx:11 ~ FeaturedCarousel ~ products:",
    products
  );

  // const getRandomVariant = (product: Product) => {
  //   return
  // };

  return (
    <div className="carousel-center carousel max-w-max space-x-4 bg-neutral p-4">
      {products?.map((product) => (
        <div className="carousel-item">
          {/* <FeaturedCard name={} price={} type={} vendor={} /> */}
        </div>
      ))}
    </div>
  );
};

export default FeaturedCarousel;
