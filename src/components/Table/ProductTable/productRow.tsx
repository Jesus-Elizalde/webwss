import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import Modal from "~/components/Modal";
import { RouterOutputs } from "~/utils/api";

type products = RouterOutputs["product"]["getAll"][0];

type Props = {
  product: products;
  idx: number;
  deleteProduct(): void;
};

const ProductRow = ({ product, idx, deleteProduct }: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleToggleDelete = () => setOpenDeleteModal((prev) => !prev);

  const handleDelete = () => {
    handleToggleDelete();
    deleteProduct();
  };
  return (
    <tr key={product.id}>
      <th>{idx + 1}</th>
      <td>{product.name}</td>
      <td>{product.stock}</td>
      <td>{product.price}</td>
      <td>{product.brand}</td>
      <td>{product.model}</td>
      <td>{product.color}</td>
      <td>
        <span onClick={handleToggleDelete}>
          <IoMdTrash />
        </span>
        <Modal open={openDeleteModal}>
          <div>Are you sure you want to delete:</div>
          <div>{product.name}</div>
          <div className="btn-error btn" onClick={() => handleToggleDelete()}>
            Close
          </div>
          <div className="btn-error btn" onClick={() => handleDelete()}>
            Delete
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default ProductRow;
