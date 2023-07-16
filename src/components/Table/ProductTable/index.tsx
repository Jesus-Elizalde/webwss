// import React from "react";
import type { RouterOutputs } from "~/utils/api";
// import ProductRow from "./productRow";

type products = RouterOutputs["product"]["getMany"][0];

type Props = {
  products?: products[];
};

const ProductTable = ({ products }: Props) => {
  // console.log("🚀 ~ file: index.tsx:12 ~ ProductTable ~ products:", products);
  // return (
  //   <div className="overflow-x-auto">
  //     <table className="table-compact table w-full">
  //       <thead>
  //         <tr>
  //           <th></th>
  //           <th>Name</th>
  //           <th>Stock</th>
  //           <th>Price</th>
  //           <th>Color</th>
  //           <th></th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {products?.map((product, idx) => (
  //           <ProductRow idx={idx} product={product} key={product.id} />
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  return <div></div>;
};

export default ProductTable;
