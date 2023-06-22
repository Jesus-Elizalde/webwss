import React from "react";
import FeaturedCard from "./FeaturedCard";
import { api } from "~/utils/api";
import { getImageUrlFromProduct } from "~/utils";

const FeaturedCarousel = () => {
  const { data: products } = api.product.getfiltered.useQuery({
    collectionName: "Featured",
  });
  console.log(
    "🚀 ~ file: featuredCarousel.tsx:11 ~ FeaturedCarousel ~ products:",
    products
  );

  return (
    <div className="carousel w-full space-x-4 p-4">
      {products?.map((product) => (
        <div className="carousel-item" key={product.id}>
          <FeaturedCard
            id={product.id}
            name={product.name}
            price={product.price}
            type={product.type}
            vendor={"vendor"}
            url={getImageUrlFromProduct(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedCarousel;
