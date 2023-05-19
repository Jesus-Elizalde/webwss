import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "~/utils/api";
import Modal from "~/components/Modal";

const AdminSingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data: product, refetch: productRefresh } =
    api.product.getOne.useQuery({ id });
  const [imageModal, setImageModal] = useState(false);
  const imageModalToggle = () => setImageModal((prev) => !prev);

  return (
    <div>
      <div className="btn" onClick={imageModalToggle}>
        Add image
      </div>
      <h1>{product?.name}</h1>
      <h1>{product?.id}</h1>
      <h1>{product?.types}</h1>
      <Modal open={imageModal}>
        <div>
          <h1>Image Modal</h1>
        </div>
      </Modal>
    </div>
  );
};

export default AdminSingleProductPage;
