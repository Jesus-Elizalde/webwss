// import { Color } from "@prisma/client";
// import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

const CollectionPage = () => {
  const router = useRouter();
  const { id } = router.query as {
    id: string;
  };
  console.log("🚀 ~ file: [slug].tsx:11 ~ CollectionPage ~ slug:", id);

  const { data: product } = api.product.getOne.useQuery({
    id,
  });
  console.log("🚀 ~ file: [slug].tsx:18 ~ CollectionPage ~ products:", product);

  return (
    <div>
      <h1>Product Page</h1>
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <p>{product?.type}</p>
    </div>
  );
};

export default CollectionPage;
