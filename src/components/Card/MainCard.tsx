import React from "react";

const MainCard = () => {
  return (
    <div className="card">
      <figure>
        <img
          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/nike%20tiempo.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Nike Tiempo Legend 9 Pro FG</h2>
        <div className="flex">
          <p>Nike</p>
          <p>$140.00</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
