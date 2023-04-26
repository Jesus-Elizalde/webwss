import Link from "next/link";
import { type ReactNode } from "react";
import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdOutlineSettings,
} from "react-icons/md";

type Props = {
  children: ReactNode;
};

const AdminNav = ({ children }: Props) => {
  return (
    <div className="drawer drawer-mobile">
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
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
