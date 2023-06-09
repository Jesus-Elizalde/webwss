import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  type: string;
  price: number;
  vendor: string;
  url: string;
};

const FeaturedCard = ({ name, type, price, vendor, url }: Props) => {
  return (
    <div className="card-compact card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={url} alt={name} height={100} width={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
