import React from "react";
import Card from ".";
import { api } from "~/utils/api";
import LoadingCard from "./LoadingCard";

const FeaturedCarousel = () => {
  const { data: tag, isLoading: loading } = api.product.getByTag.useQuery({
    tag: "new",
  });

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Just In</h1>
        <div className="carousel-center carousel rounded-box space-x-4 p-4 max-[640px]:max-w-xs lg:w-full">
          {loading ? (
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            tag &&
            tag[0]?.products.map((product) => (
              <Card product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
