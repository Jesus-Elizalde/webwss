import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "~/utils/api";
import Modal from "~/components/Modal";
import * as Yup from "yup";

const variantSchema = Yup.object().shape({
  barcode: Yup.string(),
  modelNum: Yup.string(),
  published: Yup.boolean(),
  size: Yup.string(),
});

const AdminSingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data: product, refetch: productRefresh } =
    api.product.getOne.useQuery({ id });
  console.log(product);

  const [newVariantModal, setNewVariantModal] = useState(false);
  const handleNewVariantModal = () => setNewVariantModal((prev) => !prev);

  return (
    <div>
      <h1>{product?.name}</h1>
      <div className="btn" onClick={handleNewVariantModal}>
        Add Variant
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Barcode</th>
              <th>Model Number</th>
              <th>Published</th>
              <th>Filtered Colors</th>
              <th>Detailed Colors</th>
              <th>Size</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product?.variants.map((variant, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{variant.barcode}</td>
                  <td>{variant.modelNum}</td>
                  <td>{variant.published}</td>
                  <td>{variant.colors}</td>
                  <td>{variant.detailedColors}</td>
                  <td>{variant.size}</td>
                  <td>{variant.description}</td>
                  <td>{variant.stock}</td>
                  <td>{variant.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal open={newVariantModal}>
        <div>
          <div className="btn-error btn" onClick={handleNewVariantModal}>
            Close
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminSingleProductPage;
