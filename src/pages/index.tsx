import { type NextPage } from "next";

import Hero from "~/components/Hero";
import FeaturedCarousel from "~/components/Card/featured";
import MediaHero from "~/components/Hero/MediaHero";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: products, refetch: refetchProducts } =
    api.product.getAll.useQuery();
  console.log("🚀 ~ file: index.tsx:10 ~ products:", products);
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedCarousel />
      <MediaHero />
    </div>
  );
};

export default Home;
