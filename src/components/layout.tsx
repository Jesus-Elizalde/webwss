import { type ReactNode } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <main className="lg:mx-10">
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
}
