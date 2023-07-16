import { type NextPage } from "next";
import { FeaturedCarousel, Hero, MediaHero } from "~/components";

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
