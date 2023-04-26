import { type ReactNode } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import AdminNav from "./Navbar/AdminNav";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  let admin = false;
  return (
    <>
      <main className={!admin ? "lg:mx-10" : ""}>
        {!admin && <NavBar />}
        {admin && <AdminNav>{children}</AdminNav>}
        {!admin && children}
        {!admin && <Footer />}
      </main>
    </>
  );
}
