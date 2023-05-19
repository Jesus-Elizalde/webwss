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
});

const InventoryPage = () => {
  const { data: products, refetch: refetchProducts } =
    api.product.getAll.useQuery();

  const { data: brands } = api.brand.getAll.useQuery();
  const { data: collections } = api.collection.getAll.useQuery();
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
              {({ values, errors }) => (
                <Form>
                  <div className="flex">
                    <div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Name:</span>
                        </label>
                        <Field
                          id="name"
                          name="name"
                          placeholder="Name"
                          className={`input-bordered input w-full max-w-xs ${
                            errors.name ? "input-error" : ""
                          }`}
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
                      <div className="form-control max-w-xs">
                        <label className="label cursor-pointer">
                          <span className="label-text">Published</span>
                          <Field
                            id="published"
                            type="checkbox"
                            name="published"
                            className="checkbox"
                          />
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
                          className={`input-bordered input w-full max-w-xs ${
                            errors.price ? "input-error" : ""
                          }`}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="price" />
                          </span>
                        </label>
                      </div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Colors:</span>
                        </label>
                        <FieldArray
                          name="colors"
                          render={(arrayHelpers) => (
                            <div>
                              <div className=" max-h-48 overflow-y-auto rounded bg-base-200 ">
                                {values.colors.map((color, index) => (
                                  <div key={index}>
                                    <Field
                                      as="select"
                                      name={`colors.${index}`}
                                      className="input-bordered input input-xs mb-1 mr-2 w-20 max-w-xs"
                                    >
                                      {Object.values(ProductColor).map(
                                        (color, idx) => (
                                          <option value={color} key={idx}>
                                            {color}
                                          </option>
                                        )
                                      )}
                                    </Field>
                                    {values.colors.length > 1 && (
                                      <button
                                        type="button"
                                        className="btn-error btn-xs btn"
                                        onClick={() =>
                                          values.colors.length > 1 &&
                                          arrayHelpers.remove(index)
                                        } // remove a color from the list
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <button
                                type="button"
                                className="btn-secondary btn-sm btn mt-2"
                                onClick={() => arrayHelpers.push("BLACK")} // insert an empty string at a position
                              >
                                +
                              </button>
                            </div>
                          )}
                        />
                        <label className="label">
                          <span className="label-text-alt">
                            <ErrorMessage name="colors" />
                          </span>
                        </label>
                      </div>
                      <div className="form-control w-full max-w-xs ">
                        <label className="label">
                          <span className="label-text">Sizes:</span>
                        </label>
                        <FieldArray
                          name="sizes"
                          render={(arrayHelpers) => (
                            <div>
                              <div className=" max-h-48 overflow-y-auto rounded bg-base-200 ">
                                {values.sizes.map((size, index) => (
                                  <div key={index}>
                                    <Field
                                      as="select"
                                      name={`sizes.${index}`}
                                      className="input-bordered input input-xs mb-1 mr-2 w-20 max-w-xs"
                                    >
                                      {Object.values(ProductSize).map(
                                        (size, idx) => (
                                          <option value={size} key={idx}>
                                            {size}
                                          </option>
                                        )
                                      )}
                                    </Field>
                                    {values.sizes.length > 1 && (
                                      <button
                                        type="button"
                                        className="btn-error btn-xs btn"
                                        onClick={() =>
                                          values.sizes.length > 1 &&
                                          arrayHelpers.remove(index)
                                        } // remove a size from the list
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <button
                                type="button"
                                className="btn-secondary btn-sm btn mt-2"
                                onClick={() => arrayHelpers.push("BLACK")} // insert an empty string at a position
                              >
                                +
                              </button>
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
                          {brands?.map(({ id, name }) => (
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
                    </div>
                  </div>

                  <div className="btn-error btn" onClick={() => handleToggle()}>
                    Cancel
                  </div>
                  <button type="submit" className="btn-primary btn">
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
