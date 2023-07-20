import Image from "next/image";
import Link from "next/link";
import React from "react";
import { type featuredCard } from "~/types";

const FeaturedCard = ({ id, name, type, price, vendor, url }: featuredCard) => {
  return (
    <Link href={`/products/${id}`} className="carousel-item">
      <div className="card card-normal">
        <figure>
          <Image
            src={url || "/imagenotfound.svg"}
            alt={name}
            height={375}
            width={375}
            className="aspect-square h-full w-full object-cover"
          />
        </figure>
        <div className=" mr-4 mt-3 flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-bold">{name}</h2>
            <p className="text-info-content">{`$${price}`}</p>
          </div>
          <p className="text-sm text-info-content">{type}</p>
          <p className="text-sm text-info-content">{vendor}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
