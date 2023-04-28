import React, { useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import Modal from "~/components/Modal";
import { api } from "~/utils/api";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";

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

interface Product extends Yup.InferType<typeof productSchema> {}

const InventoryPage = () => {
  const { data: products, refetch: refetchProducts } =
    api.product.getAll.useQuery(undefined);
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  const createCustomer = api.product.create.useMutation({
    onSuccess: () => {
      void refetchProducts();
    },
  });

  const initValues: Product = {
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
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <label
              htmlFor="my-drawer-4"
              className="btn-primary drawer-button btn"
            >
              Open drawer
            </label>
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
                    createCustomer.mutate({ ...values });
                    actions.setSubmitting(false);
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

                    <div
                      className="btn-error btn"
                      onClick={() => handleToggle()}
                    >
                      Cancel
                    </div>
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </Form>
                </Formik>
              </div>
            </Modal>

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
                    <tr key={product.id}>
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
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu w-80 bg-base-100 p-4 text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
