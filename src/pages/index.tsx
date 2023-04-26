import { type NextPage } from "next";
import NavBar from "~/components/Navbar";

import { SiNike, SiAdidas, SiPuma } from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center lg:mx-10">
      <NavBar />

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

      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Just In</h1>
        <div className="lg:flex lg:gap-2">
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
          <div className="card mb-8 w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/speed.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title ">
                X SPEEDPORTAL.1 FIRM GROUND SOCCER CLEATS
              </h1>
              <div className="flex">
                <p>Nike</p>
                <p>$250.00</p>
              </div>
            </div>
          </div>
          <div className="card mb-8 w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/future.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title ">FUTURE ULTIMATE FG/AG</h1>
              <div className="flex">
                <p>Puma</p>
                <p>$220.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
