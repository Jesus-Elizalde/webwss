import { type NextPage } from "next";
import NavBar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="mx-10 flex flex-col items-center">
      <NavBar />
    </div>
  );
};

export default Home;
