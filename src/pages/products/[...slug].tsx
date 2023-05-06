import type { CollectionType, ProductColor, ProductSize } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import LoadingMainCard from "~/components/Card/LoadingMainCard";
import MainCard from "~/components/Card/MainCard";
import { api } from "~/utils/api";

const ProductsPage = () => {
  const router = useRouter();
  const utils = api.useContext();

  const {
    slug,
    rate,
    page = 1,
    price,
    sizes,
    colors,
  } = router.query as {
    slug: string[] | undefined;
    rate: number | undefined;
    page: number | undefined;
    price: string | undefined;
    sizes: string | string[] | undefined;
    colors: string | string[] | undefined;
  };

  const queryInput = useMemo(
    () => ({
      types: slug && (slug[0]?.toUpperCase() as CollectionType),
      slug: slug && slug[1],
      sizes: [sizes].flat(1).filter(Boolean) as ProductSize[],
      colors: [colors].flat(1).filter(Boolean) as ProductColor[],
      page: page && Number(page),
      rate: rate && Number(rate),
      gte: price ? (price === "$" ? 0 : price === "$$" ? 10 : 100) : undefined,
      lte: price
        ? price === "$"
          ? 10
          : price === "$$"
          ? 100
          : 1000000
        : undefined,
    }),
    [colors, page, price, rate, sizes, slug]
  );

  const {
    data,
    isLoading: loading,
    isPreviousData,
  } = api.product.all.useQuery(queryInput);
  console.log("🚀 ~ file: [...slug].tsx:57 ~ ProductsPage ~ data:", data);

  const pageSize = 12;

  useEffect(() => {
    if (data) {
      const totalPageCount = Math.ceil(data.totalCount / pageSize);
      if (!isPreviousData && totalPageCount > Number(page)) {
        void utils.product.all.prefetch({
          ...queryInput,
          page: Number(page) + 1,
        });
      }
    }
  }, [data, page, isPreviousData, queryInput, utils]);

  return (
    <div>
      <div className="grid min-h-screen max-[640px]:grid-cols-2 max-[640px]:gap-x-2 max-[640px]:gap-y-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
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
          data?.products?.map((product) => (
            <MainCard product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
