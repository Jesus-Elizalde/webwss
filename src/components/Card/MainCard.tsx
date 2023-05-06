import Image from "next/image";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

type Product = RouterOutputs["product"]["all"]["products"][0];

type Props = {
  product: Product;
};

const MainCard = ({ product }: Props) => {
  console.log("🚀 ~ file: MainCard.tsx:12 ~ MainCard ~ product:", product);
  return (
    <div className="card">
      <figure className="h-[238px] lg:min-h-[653px]">
        {product?.images[0] && (
          <Image
            src={product.images[0].imageURL}
            alt={product.name}
            width={522}
            height={653}
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <div className="flex">
          <p>{product.types}</p>
          <p>${product.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
