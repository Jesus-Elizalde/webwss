import { type ReactNode } from "react";

import { useRouter } from "next/router";
import AdminNav from "../Navbar/AdminNav";
import Footer from "../Footer";
import NavBar from "../Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const { pathname: url } = useRouter();
  const admin = url.split("/").includes("admin");

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
