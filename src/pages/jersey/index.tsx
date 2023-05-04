import { useRouter } from "next/router";
import React from "react";
import LoadingMainCard from "~/components/Card/LoadingMainCard";
import MainCard from "~/components/Card/MainCard";
import { api } from "~/utils/api";
import { getCategoryFromPath } from "~/utils/getCategory";

const JerseyPage = () => {
  const { asPath: path } = useRouter();
  const { data: products, isLoading: loading } =
    api.product.getByCategory.useQuery({
      category: getCategoryFromPath(path),
    });
  return (
    <div>
      <div className="grid max-[640px]:grid-cols-2 max-[640px]:gap-x-2 max-[640px]:gap-y-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
        {loading ? (
          <>
            <LoadingMainCard />
            <LoadingMainCard />
            <LoadingMainCard />
            <LoadingMainCard />
            <LoadingMainCard />
            <LoadingMainCard />
          </>
        ) : (
          products?.map((product) => (
            <MainCard product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default JerseyPage;
