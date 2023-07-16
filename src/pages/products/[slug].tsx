// import { Color } from "@prisma/client";
// import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

const CollectionPage = () => {
  const router = useRouter();
  const { slug } = router.query as {
    slug: string;
  };
  console.log("🚀 ~ file: [slug].tsx:11 ~ CollectionPage ~ slug:", slug);

  const { data: products } = api.product.getMany.useQuery({
    slug,
  });
  console.log(
    "🚀 ~ file: [slug].tsx:18 ~ CollectionPage ~ products:",
    products
  );

  return <div></div>;
};

export default CollectionPage;
