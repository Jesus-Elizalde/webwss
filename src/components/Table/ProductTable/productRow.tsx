// import Link from "next/link";
// import React, { useState } from "react";
// import { IoMdTrash } from "react-icons/io";
// import Modal from "~/components/Modal";
// import { type RouterOutputs, api } from "~/utils/api";

// type products = RouterOutputs["product"]["getAll"][0];

// type Props = {
//   product: products;
//   idx: number;
// };

const ProductRow = () => {
  // const [openDeleteModal, setOpenDeleteModal] = useState(false);
  // const handleToggleDelete = () => setOpenDeleteModal((prev) => !prev);

  // const { refetch: refetchProducts } = api.product.getAll.useQuery();

  // const deleteProducts = api.product.delete.useMutation({
  //   onSuccess: () => {
  //     void refetchProducts();
  //   },
  // });

  // const handleDelete = () => {
  //   deleteProducts.mutate({ id: `${product.id}` });
  //   handleToggleDelete();
  // };
  return (
    // <tr key={product.id}>
    //   <th>{idx + 1}</th>
    //   <td>
    //     <Link href={`/admin/inventory/${product.id}`}>{product.title}</Link>
    //   </td>
    //   <td>{product.variants[0]?.price}</td>
    //   <td>{product.variants[0]?.price}</td>
    //   <td>
    //     <span onClick={handleToggleDelete}>
    //       <IoMdTrash />
    //     </span>
    //     <Modal open={openDeleteModal}>
    //       <div>Are you sure you want to delete:</div>
    //       <div>{product.title}</div>
    //       <div className="btn-error btn" onClick={() => handleToggleDelete()}>
    //         Close
    //       </div>
    //       <div className="btn-error btn" onClick={() => handleDelete()}>
    //         Delete
    //       </div>
    //     </Modal>
    //   </td>
    // </tr>
    <tr></tr>
  );
};

export default ProductRow;
