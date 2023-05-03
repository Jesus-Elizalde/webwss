import Image from "next/image";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

type Product = RouterOutputs["product"]["getAll"][0];

type Props = {
  product: Product;
};

const Card = ({ product }: Props) => {
  return (
    <div className="card w-[312] bg-base-100">
      <figure>
        {product?.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={312}
            height={400}
          />
        )}
      </figure>
      <div className="card-body">
        <h1 className="card-title ">{product.name}</h1>
        <div className="flex">
          <p>{product.brand}</p>
          <p>${product.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
