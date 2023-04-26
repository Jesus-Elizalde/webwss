import React from "react";
import { SiAdidas, SiNike, SiPuma } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div className="hero w-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
            className="rounded-lg shadow-2xl lg:max-w-sm"
          />
          <div>
            <h1 className="text-5xl font-bold">Explore and Shop!</h1>
            <p className="py-6">
              Explore and Shop from various brands. Find your style and go ball
              out.
            </p>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full justify-evenly">
        <SiNike size={55} />
        <SiAdidas size={55} />
        <SiPuma size={55} />
      </div>
    </>
  );
};

export default Hero;
