import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineStorefront,
} from "react-icons/md";

type Props = {
  children: ReactNode;
};

const AdminNav = ({ children }: Props) => {
  const { data: sessionData } = useSession();
  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn-primary drawer-button btn lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 p-4 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href="/admin/dashboard">
              <MdOutlineDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/inventory">
              <MdOutlineInventory2 />
              Inventory
            </Link>
          </li>
          <li>
            <Link href="/admin/settings">
              <MdOutlineSettings />
              Settings
            </Link>
          </li>
          <li>
            <Link href="/">
              <MdOutlineStorefront />
              Go to Page
            </Link>
          </li>
          <li>
            <Link href="">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className=" rounded-full">
                  <Image
                    src={sessionData?.user?.image ?? ""}
                    alt={sessionData?.user?.name ?? ""}
                    fill
                    className="rounded-full"
                  />
                </div>
              </label>
              Settings
              <span
                className="flex items-center"
                onClick={() => void signOut()}
              >
                <MdOutlineLogout />
                Sign Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
