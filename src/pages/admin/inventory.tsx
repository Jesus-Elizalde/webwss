import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import { api } from "~/utils/api";

const InventoryPage = () => {
  const { data: products } = api.product.getAll.useQuery(undefined);
  console.log(
    "🚀 ~ file: inventory.tsx:7 ~ InventoryPage ~ Products:",
    products
  );
  return (
    <ProtectedAdminLayout>
      <>
        <div>Inventory Page</div>
        <div className="overflow-x-auto">
          <table className="table-compact table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                  <td>{product.brand}</td>
                  <td>{product.model}</td>
                  <td>{product.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
