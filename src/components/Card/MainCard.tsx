import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { type RouterOutputs } from "~/utils/api";

type ProductType = RouterOutputs["product"]["getMany"][0];

const MainCard = ({ id, name, variants, price, type, vendor }: ProductType) => {
  const [currVariant, setCurrVariant] = useState(0);

  return (
    <Link href={`/product/${`${id}/${variants[currVariant]?.id}`}`}>
      <div className="card card-normal">
        <figure>
          <Image
            src={variants[currVariant]?.images[0]?.url || "/imagenotfound.svg"}
            alt={name}
            height={375}
            width={375}
            className="aspect-square h-full w-full object-cover"
          />
        </figure>
        <div className=" my-3 mr-4 flex flex-col">
          <div className="flex gap-4">
            {variants.map((variant, idx) => (
              <div key={variant.id} onMouseOver={() => setCurrVariant(idx)}>
                <Image
                  src={variant?.images[0]?.url || "/imagenotfound.svg"}
                  alt={name}
                  height={50}
                  width={50}
                  className="aspect-square h-full w-full object-cover"
                />
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
    </Link>
  );
};

export default MainCard;
