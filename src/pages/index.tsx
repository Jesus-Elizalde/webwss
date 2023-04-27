import { type NextPage } from "next";

import Hero from "~/components/Hero";
import FeaturedCarousel from "~/components/Card/featured";
import MediaHero from "~/components/Hero/MediaHero";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedCarousel />
      <MediaHero />
    </div>
  );
};

export default Home;
