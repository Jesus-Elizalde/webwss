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
        <div className="w-full lg:flex lg:gap-2">
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
      <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
        <div className="grid grid-flow-col gap-4">
          <a className="link-hover link">About us</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Jobs</a>
          <a className="link-hover link">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2023 - All right reserved by The WSS Created by
            Chuy.tech
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
