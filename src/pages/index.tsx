import { type NextPage } from "next";
import NavBar from "~/components/Navbar";

import { SiNike, SiAdidas, SiPuma } from "react-icons/si";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import FeaturedCarousel from "~/components/Card/featured";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center lg:mx-10">
      <NavBar />
      <Hero />
      <FeaturedCarousel />
      <div className="flex w-full flex-col items-center bg-base-200 py-12">
        <h1 className="mx-2 mb-2 text-2xl font-bold">
          Follow Products and Updates on Instagram
        </h1>
        <div className="flex flex-wrap gap-4 ">
          <img
            src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
            alt=""
            className="w-24"
          />
          <img
            src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
            alt=""
            className="w-24"
          />
          <img
            src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
            alt=""
            className="w-24"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
