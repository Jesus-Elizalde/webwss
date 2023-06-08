import React from "react";

const FeaturedCard = () => {
  return (
    <div className="card-compact card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/zoom-mercurial-vapor-15-elite-xxv-fg-firm-ground-soccer-cleats-NLZxDR.jpeg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
