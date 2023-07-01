import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import { api } from "~/utils/api";

import Link from "next/link";
import Image from "next/image";

const InventoryPage = () => {
  const { data: products } = api.product.getAllAdmin.useQuery();
  console.log("🚀 ~ file: index.tsx:10 ~ InventoryPage ~ products:", products);

  return (
    <ProtectedAdminLayout>
      <div className="flex flex-col">
        <div className="flex justify-between">
          Products
          <div className="flex gap-2">
            <div className="dropdown-bottom dropdown-end dropdown">
              <label tabIndex={0} className="btn">
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-32 bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Export</a>
                </li>
                <li>
                  <a>Import</a>
                </li>
              </ul>
            </div>
            <Link href="/admin/products/new" className="btn-primary btn">
              Add product
            </Link>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Product</th>
                <th>Status</th>
                <th>Inventory</th>
                <th>Type</th>
                <th>Vendor</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <th>
                    <div className="flex items-center space-x-3">
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            src={
                              product.variants[0]?.images[0]?.url ||
                              "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/notfoundimg.jpg"
                            }
                            alt="Avatar Tailwind CSS Component"
                            width={96}
                            height={120}
                          />
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>
                    <Link href={`/admin/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        product.status === "ACTIVE"
                          ? "badge-success"
                          : "badge-info"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td>TBD in stock for {product.variants.length} variants</td>
                  <td>{product.type}</td>
                  <td>{product.vendor?.name ? product.vendor.name : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
