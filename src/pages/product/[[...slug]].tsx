// import { Color } from "@prisma/client";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

const CollectionPage = () => {
  const router = useRouter();
  const { slug } = router.query as {
    slug: string[];
  };

  const { data: product } = api.product.getOne.useQuery({
    id: slug[0] as string,
  });

  const currVariant = product?.variants.find(
    (variant) => variant.id === slug[1]
  );
  console.log(
    "🚀 ~ file: [[...slug]].tsx:21 ~ CollectionPage ~ currVariant:",
    currVariant
  );

  return (
    <div>
      <h1>Product Page</h1>
      <p>{currVariant?.name}</p>
      <p>{currVariant?.price}</p>
      <p>{product?.type}</p>
      <p>{product?.vendor?.name}</p>
      <p>{product?.description}</p>
      {currVariant?.images.map((image) => (
        <Image src={image.url} alt={image.id} width={50} height={50} />
      ))}
    </div>
  );
};

export default CollectionPage;
