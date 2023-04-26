import Link from "next/link";
import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <FiSearch />
        </div>
        <div className="navbar-center">
          <Link href="/">The WSS</Link>
        </div>
        <div className="navbar-end">
          <span className="mr-2">
            <FiUser />
          </span>
          Account
        </div>
      </div>
      <div className="mb-4 w-full border-t-2"></div>
      <div className="mb-10 flex w-full justify-center gap-4">
        <Link href="/footwear">Footwear</Link>
        <a href="">Jerseys</a>
        <a href="">Accessories</a>
        <a href="">Equipment</a>
        <a href="">Clothing</a>
      </div>
    </>
  );
};

export default NavBar;
