import Image from "next/image";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

type Product = RouterOutputs["product"]["getAll"][0];

type Props = {
  product: Product;
};

const MainCard = ({ product }: Props) => {
  return (
    <div className="card">
      <figure className="h-[238px] lg:min-h-[653px]">
        {product?.images[0] && (
          <Image
            src={product.images[0].url}
            alt={product.title}
            width={522}
            height={653}
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <div className="flex">
          <p>{product.vendor?.name}</p>
          <p>${product.variants[0]?.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
