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

      <Footer />
    </div>
  );
};

export default Home;
