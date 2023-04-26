import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";

const NavBar = () => {
  const { data: sessionData } = useSession();
  console.log("🚀 ~ file: index.tsx:8 ~ NavBar ~ sessionData:", sessionData);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <FiSearch />
        </div>
        <div className="navbar-center">
          <Link href="/">The WSS</Link>
        </div>
        {!sessionData?.user ? (
          <div className="navbar-end" onClick={() => signIn()}>
            <span className="mr-2">
              <FiUser />
            </span>
            Sign In
          </div>
        ) : (
          <div className="navbar-end">
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img
                    src={sessionData?.user?.image ?? ""}
                    alt={sessionData?.user?.name ?? ""}
                    // fill
                    className="rounded-full"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={() => void signOut()}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="mb-4 w-full border-t-2"></div>
      <div className="mb-10 flex w-full justify-center gap-4">
        <Link href="/footwear">Footwear</Link>
        <Link href="/jersey">Jerseys</Link>
        <Link href="/accessory">Accessories</Link>
        <Link href="/equipment">Equipment</Link>
        <Link href="/clothing">Clothing</Link>
      </div>
    </>
  );
};

export default NavBar;
