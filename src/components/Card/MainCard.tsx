import Image from "next/image";
import Link from "next/link";
import React from "react";
import { type RouterOutputs } from "~/utils/api";

type ProductType = RouterOutputs["product"]["getMany"][0];

const MainCard = ({ id, name, variants, price, type, vendor }: ProductType) => {
  return (
    <div className="card card-normal">
      <figure>
        <Image
          src={variants[0]?.images[0]?.url || "/imagenotfound.svg"}
          alt={name}
          height={375}
          width={375}
          className="aspect-square h-full w-full object-cover"
        />
      </figure>
      <div className=" my-3 mr-4 flex flex-col">
        <div className="flex justify-between">
          {variants.map((variant) => (
            <div key={variant.id}>
              <Link href={`/product/${id}`}>
                <Image
                  src={variant?.images[0]?.url || "/imagenotfound.svg"}
                  alt={name}
                  height={50}
                  width={50}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">{name}</h2>
          <p className="text-info-content">{`$${price}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-info-content">{type}</p>
          <p className="text-sm text-info-content">{vendor && vendor.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
