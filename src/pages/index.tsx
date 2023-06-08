import { type NextPage } from "next";
import FeaturedCarousel from "~/components/Card/featuredCarousel";

import Hero from "~/components/Hero";

import MediaHero from "~/components/Hero/MediaHero";

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
