import React, { useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import Modal from "~/components/Modal";
import { api } from "~/utils/api";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ProductTable from "~/components/Table/ProductTable";
import { CollectionType, ProductColor, ProductSize } from "@prisma/client";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Is Required"),
  description: Yup.string(),
  price: Yup.number().min(0, "Cannot be a negative number").defined(),
  rate: Yup.number().min(0, "Cannot be a negative number").defined(),
  published: Yup.boolean().required(),
  modelId: Yup.number().required("Is Required"),
  collectionId: Yup.number().required("Is Required"),
  colors: Yup.array()
    .of(Yup.mixed<ProductColor>().oneOf(Object.values(ProductColor)).required())
    .required(),
  sizes: Yup.array()
    .of(Yup.mixed<ProductSize>().oneOf(Object.values(ProductSize)).required())
    .required(),
  types: Yup.array()
    .of(
      Yup.mixed<CollectionType>()
        .oneOf(Object.values(CollectionType))
        .required()
    )
    .required(),
  images: Yup.array()
    .of(
      Yup.string()
        .url("Please enter a valid URL")
        .matches(
          /\.(jpg|jpeg|png|gif|webp)$/i,
          "Please enter a valid image URL (jpg, jpeg, png, or gif,webp)"
        )
        .required()
    )
    .required(),
});

const InventoryPage = () => {
  const { data: products, refetch: refetchProducts } =
    api.product.getAll.useQuery();

  const { data: models } = api.model.getAll.useQuery();
  const { data: collections } = api.collection.getAll.useQuery();
  console.log(
    "🚀 ~ file: inventory.tsx:52 ~ InventoryPage ~ collections:",
    collections
  );

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
    price: 0,
    rate: 0,
    published: false,
    images: [""],
    colors: ["BLACK"],
    sizes: ["M"],
    types: ["MEN"],
    modelId: 0,
    collectionId: 0,
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
                createProduct.mutate({
                  ...values,
                  collectionId: +values.collectionId,
                  modelId: +values.modelId,
                });
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
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Published:</span>
                          <Field
                            id="published"
                            type="checkbox"
                            name="published"
                            placeholder="Published"
                            className="toggle"
                          />
                          <label className="label">
                            <span className="label-text-alt">
                              <ErrorMessage name="published" />
                            </span>
                          </label>
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
                                      className="input-bordered input w-48 max-w-xs"
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
                    </div>
                    <div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Colors:</span>
                        </label>
                        <FieldArray
                          name="colors"
                          render={(arrayHelpers) => (
                            <div className="h-48 overflow-y-auto">
                              {values.colors && values.colors.length > 0 ? (
                                values.colors.map((image, index) => (
                                  <div key={index}>
                                    <Field
                                      as="select"
                                      name={`colors.${index}`}
                                      className="input-bordered input w-48 max-w-xs"
                                    >
                                      {Object.values(ProductColor).map(
                                        (color, idx) => (
                                          <option value={color} key={idx}>
                                            {color}
                                          </option>
                                        )
                                      )}
                                    </Field>

                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        values.colors.length > 1 &&
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
                                  Add Color
                                </button>
                              )}
                            </div>
                          )}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="colors" />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Sizes:</span>
                        </label>
                        <FieldArray
                          name="sizes"
                          render={(arrayHelpers) => (
                            <div className="h-48 overflow-y-auto">
                              {values.sizes && values.sizes.length > 0 ? (
                                values.sizes.map((image, index) => (
                                  <div key={index}>
                                    <Field
                                      as="select"
                                      name={`sizes.${index}`}
                                      className="input-bordered input w-28 max-w-xs"
                                    >
                                      {Object.values(ProductSize).map(
                                        (size, idx) => (
                                          <option value={size} key={idx}>
                                            {size}
                                          </option>
                                        )
                                      )}
                                    </Field>

                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        values.sizes.length > 1 &&
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
                                  Add Color
                                </button>
                              )}
                            </div>
                          )}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="sizes" />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Type:</span>
                        </label>
                        <FieldArray
                          name="types"
                          render={(arrayHelpers) => (
                            <div className="h-48 overflow-y-auto">
                              {values.types && values.types.length > 0 ? (
                                values.types.map((image, index) => (
                                  <div key={index}>
                                    <Field
                                      as="select"
                                      name={`types.${index}`}
                                      className="input-bordered input w-28 max-w-xs"
                                    >
                                      {Object.values(CollectionType).map(
                                        (type, idx) => (
                                          <option value={type} key={idx}>
                                            {type}
                                          </option>
                                        )
                                      )}
                                    </Field>

                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() =>
                                        values.types.length > 1 &&
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
                                  Add Color
                                </button>
                              )}
                            </div>
                          )}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="types" />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Model:</span>
                        </label>
                        <Field
                          id="modelId"
                          as="select"
                          name="modelId"
                          placeholder="Model"
                          className="input-bordered input w-full max-w-xs"
                        >
                          {models?.map(({ id, name }) => (
                            <option value={+id} key={id}>
                              {name}
                            </option>
                          ))}
                        </Field>
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="modelId" />
                          </span>
                        </label>
                      </div>
                      <div className="form-control w-48 max-w-xs">
                        <label className="label">
                          <span className="label-text">Collection:</span>
                        </label>
                        <Field
                          id="collectionId"
                          as="select"
                          name="collectionId"
                          placeholder="Collection"
                          className="input-bordered input w-28 max-w-xs"
                        >
                          {collections?.map(({ id, name }) => (
                            <option value={+id} key={id}>
                              {name}
                            </option>
                          ))}
                        </Field>
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="collectionId" />
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
