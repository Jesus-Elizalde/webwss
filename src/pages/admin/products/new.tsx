import { useRouter } from "next/router";
import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const productSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  status: Yup.string().required(),
  vendorId: Yup.number(),
  productType: Yup.string(),
  tags: Yup.array().of(Yup.string().required()).required(),
  collections: Yup.array().of(Yup.number().required()).required(),
  images: Yup.array().of(Yup.string().required()).required(),
  variants: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string(),
        sku: Yup.string(),
        barcode: Yup.string(),
        price: Yup.number().min(0, "Cannot be a Negative Number"),
        compareAtPrice: Yup.number(),
        taxable: Yup.boolean().required(),
        stock: Yup.number().min(0, "Cannot be a Negative Number"),
        color: Yup.string(),
        size: Yup.string(),
      })
    )
    .required(),
});

const NewProduct = () => {
  const router = useRouter();

  const initValues: Yup.InferType<typeof productSchema> = {
    description: "",
    vendorId: undefined,
    productType: "",
    title: "",
    status: "Active",
    tags: [],
    collections: [],
    images: [],
    variants: [
      {
        title: "",
        sku: "",
        barcode: "",
        price: 0,
        compareAtPrice: undefined,
        taxable: true,
        stock: 0,
        color: "",
        size: "",
      },
    ],
  };
  return (
    <ProtectedAdminLayout>
      <div className="flex flex-col gap-4 px-3 py-4">
        <div className="btn-sm btn w-14" onClick={() => router.back()}>
          Back
        </div>
        <div>Add product</div>
        <Formik
          initialValues={initValues}
          validationSchema={productSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
          }}
        >
          {({ values, errors }) => (
            <Form className="flex flex-col gap-4">
              <div className="card-bordered card bg-base-200 p-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <Field
                    name="title"
                    type="text"
                    placeholder="22/23 Champions League Official Ball"
                    className="input-bordered input w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <Field
                    name="description"
                    as="textarea"
                    className="textarea-bordered textarea h-24"
                    placeholder="This product...."
                  />
                </div>
              </div>
              <div className="card-bordered card bg-base-200 p-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Media</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://"
                    className="input-bordered input w-full"
                  />
                </div>
              </div>

              <div className="card-bordered card bg-base-200 p-2">
                <div>Variants</div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Option name</span>
                  </label>
                  <select className="select-bordered select w-full">
                    <option selected>Size</option>
                    <option>Color</option>
                    <option>Material</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Option values</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Add another value"
                    className="input-bordered input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Add another value"
                    className="input-bordered input w-full"
                  />
                  <input
                    type="text"
                    placeholder="Add another value"
                    className="input-bordered input w-full"
                  />
                </div>
                <div className="w-full overflow-x-auto">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                            Variant
                          </label>
                        </th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>SKU</th>
                        <th>Barcode</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>
                          <div className="flex items-center space-x-3">
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                            XXS
                          </div>
                        </th>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0.00"
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0.00"
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="input-bordered input"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <div className="flex items-center space-x-3">
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                            XS
                          </div>
                        </th>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0.00"
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0.00"
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="input-bordered input"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <div className="flex items-center space-x-3">
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                            S
                          </div>
                        </th>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0.00"
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="0.00"
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="input-bordered input"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="input-bordered input"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-bordered card bg-base-200 p-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <Field
                    as="select"
                    name="status"
                    className="select-bordered select w-full"
                  >
                    <option value="Active" selected>
                      Active
                    </option>
                    <option value="Draft">Draft</option>
                  </Field>
                </div>
              </div>
              <div className="card-bordered card bg-base-200 p-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Catergory</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product type</span>
                  </label>
                  <Field
                    type="text"
                    name="productType"
                    id=""
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Vendor</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-bordered input"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Collections</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-bordered input"
                  />
                  <label className="mt-2 flex flex-wrap gap-2">
                    <span className="badge">Apparel X</span>
                    <span className="badge">Men X</span>
                    <span className="badge">Women X</span>
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Tags</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-bordered input"
                  />
                  <label className="mt-2 flex flex-wrap gap-2">
                    <span className="badge">Apparel X</span>
                    <span className="badge">Men X</span>
                    <span className="badge">Women X</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-row-reverse border-t pt-2">
                <div className="btn-primary btn">Save</div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ProtectedAdminLayout>
  );
};

export default NewProduct;
