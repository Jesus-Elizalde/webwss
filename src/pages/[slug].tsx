import { useRouter } from "next/router";
import React, { useState } from "react";
import { MainCard, TempMainCard } from "~/components/Card";
import { api } from "~/utils/api";

const CollectionPage = () => {
  const router = useRouter();
  const { slug } = router.query as {
    slug: string;
  };

  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const { data: products, isLoading: Loading } = api.product.getMany.useQuery({
    slug: slug,
  });
  console.log(
    "🚀 ~ file: [...slug].tsx:17 ~ CollectionPage ~ products:",
    products
  );

  return (
    <div>
      <div>
        <p onClick={handleShowFilters}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </p>
      </div>
      <div className="flex ">
        {showFilters && <div className="w-1/5 ">Filters area</div>}
        {products && products.length === 0 ? (
          <div className="flex h-screen w-full items-center justify-center">
            No Products Found!
          </div>
        ) : (
          <div
            className={`slug ${
              showFilters ? "w-4/5" : "w-full"
            } justify-items-stretch gap-3 lg:grid lg:grid-cols-3`}
          >
            {Loading && (
              <>
                <TempMainCard />
                <TempMainCard />
                <TempMainCard />
                <TempMainCard />
                <TempMainCard />
                <TempMainCard />
              </>
            )}
            {!Loading &&
              products &&
              products?.map((product) => (
                <MainCard {...product} key={product.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
