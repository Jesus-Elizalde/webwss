import { type NextPage } from "next";
import NavBar from "~/components/Navbar";

import { SiNike, SiAdidas, SiPuma } from "react-icons/si";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import FeaturedCarousel from "~/components/Card/featured";
import MediaHero from "~/components/Hero/MediaHero";
import Card from "~/components/Card";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center lg:mx-10">
      <NavBar />
      <Hero />
      <FeaturedCarousel />
      <MediaHero />
      <Footer />
    </div>
  );
};

export default Home;
