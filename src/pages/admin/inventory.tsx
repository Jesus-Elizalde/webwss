import React, { useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import Modal from "~/components/Modal";
import { api } from "~/utils/api";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import ProductTable from "~/components/Table/ProductTable";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Is Required"),
  description: Yup.string().nullable().defined(),
  price: Yup.number().min(0, "Cannot be a negative number").defined(),
  stock: Yup.number().min(0, "Cannot be a negative number").defined(),
  category: Yup.string().required("Is Required"),
  brand: Yup.string().required("Is Required"),
  model: Yup.string().required("Is Required"),
  color: Yup.string().notRequired().defined(),
  size: Yup.string().notRequired().defined(),
  images: Yup.array().notRequired().defined(),
});

const InventoryPage = () => {
  const { data: products, refetch: refetchProducts } =
    api.product.getAll.useQuery(undefined);

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      void refetchProducts();
    },
  });

  const deleteProduct = api.product.delete.useMutation({
    onSuccess: () => {
      void refetchProducts();
    },
  });

  const initValues: Yup.InferType<typeof productSchema> = {
    name: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    stock: 0,
    color: "",
    images: [],
    model: "",
    size: "",
  };

  return (
    <ProtectedAdminLayout>
      <>
        <div>Inventory Page</div>
        <div className="btn" onClick={() => handleToggle()}>
          New Product
        </div>
        <Modal open={open}>
          <div>
            <h1>Create Product</h1>
            <Formik
              initialValues={initValues}
              validationSchema={productSchema}
              onSubmit={(values, actions) => {
                console.log({ values, actions });
                createProduct.mutate({ ...values });
                actions.setSubmitting(false);
                actions.resetForm();
                handleToggle();
              }}
            >
              <Form>
                <div className="flex gap-4">
                  <div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Name:</span>
                      </label>
                      <Field
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="name" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Description:</span>
                      </label>
                      <Field
                        id="description"
                        name="description"
                        placeholder="Description"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="description" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Price:</span>
                      </label>
                      <Field
                        id="price"
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="price" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Stock:</span>
                      </label>
                      <Field
                        id="stock"
                        type="number"
                        name="stock"
                        placeholder="Name"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="stock" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Category:</span>
                      </label>
                      <Field
                        id="category"
                        name="category"
                        placeholder="Category"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="category" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Brand:</span>
                      </label>
                      <Field
                        id="brand"
                        name="brand"
                        placeholder="Brand"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="brand" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Model:</span>
                      </label>
                      <Field
                        id="model"
                        name="model"
                        placeholder="Model"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="model" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Color:</span>
                      </label>
                      <Field
                        id="color"
                        name="color"
                        placeholder="Color"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="color" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Size:</span>
                      </label>
                      <Field
                        id="size"
                        name="size"
                        placeholder="Size"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="size" />
                        </span>
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Image:</span>
                      </label>
                      <Field
                        id="image"
                        name="image"
                        placeholder="Image"
                        className="input-bordered input w-full max-w-xs"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          <ErrorMessage name="image" />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="btn-error btn" onClick={() => handleToggle()}>
                  Cancel
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </Modal>

        <ProductTable products={products} deleteProduct={deleteProduct} />
      </>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
