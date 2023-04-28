import React from "react";
import type { RouterOutputs } from "~/utils/api";
import ProductRow from "./productRow";

type products = RouterOutputs["product"]["getAll"][0];

type Props = {
  products?: products[];
  deleteProduct: any;
};

const ProductTable = ({ products, deleteProduct }: Props) => {
  return (
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, idx) => (
            <ProductRow
              idx={idx}
              product={product}
              key={product.id}
              deleteProduct={() =>
                void deleteProduct.mutate({ id: `${product.id}` })
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
