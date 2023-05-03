import { useRouter } from "next/router";
import React from "react";
import MainCard from "~/components/Card/MainCard";
import { api } from "~/utils/api";
import { getCategoryFromPath } from "~/utils/getCategory";

const ClothingPage = () => {
  const { asPath: path } = useRouter();
  const { data: produts } = api.product.getByCategory.useQuery({
    category: getCategoryFromPath(path),
  });

  return (
    <div>
      <div className="grid max-[640px]:grid-cols-2 max-[640px]:gap-x-2 max-[640px]:gap-y-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
        {produts?.map((product) => (
          <MainCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ClothingPage;
