import React from "react";

const Card = () => {
  return (
    <div className="card mb-8 w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/nike%20tiempo.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title ">Nike Tiempo Legend 9 Pro FG</h1>
        <div className="flex">
          <p>Nike</p>
          <p>$140.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;