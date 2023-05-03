import React, { useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import Modal from "~/components/Modal";
import { api } from "~/utils/api";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ProductTable from "~/components/Table/ProductTable";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Is Required"),
  description: Yup.string(),
  price: Yup.number().min(0, "Cannot be a negative number").defined(),
  stock: Yup.number().min(0, "Cannot be a negative number").defined(),
  category: Yup.string().required("Is Required"),
  brand: Yup.string().required("Is Required"),
  model: Yup.string().required("Is Required"),
  color: Yup.string(),
  size: Yup.string(),
  images: Yup.array().of(Yup.string().required()).required(),
  tags: Yup.array().of(Yup.string().required()).required(),
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

  const initValues: Yup.InferType<typeof productSchema> = {
    name: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    stock: 0,
    color: "",
    images: [""],
    model: "",
    size: "",
    tags: [""],
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
              {({ values }) => (
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
                    </div>
                    <div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Images:</span>
                        </label>
                        <FieldArray
                          name="images"
                          render={(arrayHelpers) => (
                            <div className="h-48 overflow-y-auto">
                              {values.images && values.images.length > 0 ? (
                                values.images.map((image, index) => (
                                  <div key={index}>
                                    <Field
                                      name={`images.${index}`}
                                      className="input-bordered input w-full max-w-xs"
                                    />
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        values.images.length > 1 &&
                                        arrayHelpers.remove(index)
                                      } // remove a image from the list
                                    >
                                      -
                                    </button>
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        arrayHelpers.insert(index, "")
                                      } // insert an empty string at a position
                                    >
                                      +
                                    </button>
                                  </div>
                                ))
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.push("")}
                                >
                                  {/* show this when user has removed all friends from the list */}
                                  Add Image
                                </button>
                              )}
                            </div>
                          )}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="images" />
                          </span>
                        </label>
                      </div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Tags:</span>
                        </label>
                        <FieldArray
                          name="tags"
                          render={(arrayHelpers) => (
                            <div className="h-48 overflow-y-auto">
                              {values.tags && values.tags.length > 0 ? (
                                values.tags.map((tag, index) => (
                                  <div key={index}>
                                    <Field
                                      name={`tags.${index}`}
                                      className="input-bordered input w-full max-w-xs"
                                    />
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        values.tags.length > 1 &&
                                        arrayHelpers.remove(index)
                                      } // remove a tag from the list
                                    >
                                      -
                                    </button>
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        arrayHelpers.insert(index, "")
                                      } // insert an empty string at a position
                                    >
                                      +
                                    </button>
                                  </div>
                                ))
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.push("")}
                                >
                                  {/* show this when user has removed all friends from the list */}
                                  Add Image
                                </button>
                              )}
                            </div>
                          )}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="tags" />
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
              )}
            </Formik>
          </div>
        </Modal>

        <ProductTable products={products} />
      </>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
