import { Combobox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { api } from "~/utils/api";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ComboBox from "~/components/Forms/ComboBox";

const productSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  type: Yup.string().required(),
  price: Yup.number().required(),
  vendor: Yup.string().required(),
  collection: Yup.string().required(),
});

const NewProduct = () => {
  const router = useRouter();

  const { data: vendors } = api.vendor.getAll.useQuery();
  const { data: collections } = api.collection.getAll.useQuery();

  const initValues: Yup.InferType<typeof productSchema> = {
    title: "",
    description: "",
    type: "",
    price: 0,
    vendor: "",
    collection: "",
  };

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      void router.push("/admin/products");
    },
    onError: (err) => {
      console.log(err.data);
    },
  });

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
            console.log(values);
            createProduct.mutate({
              title: values.title,
              description: values.description,
              type: values.type,
              price: values.price,
              vendor: values.vendor,
              status: "ACTIVE",
              collection: values.collection,
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => {
            return (
              <Form>
                <div className="card-bordered card bg-base-200 p-2">
                  {JSON.stringify(values)}
                  {JSON.stringify(errors)}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Title:</span>
                    </label>
                    <Field
                      type="text"
                      value={values.title}
                      placeholder="22/23 Champions League Official Ball"
                      onChange={handleChange("title")}
                      onBlur={handleBlur("title")}
                      className={`input-bordered input w-full`}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Description:</span>
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      onChange={handleChange("description")}
                      onBlur={handleBlur("description")}
                      className={`textarea-bordered  textarea h-24`}
                      placeholder="This product...."
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Type:</span>
                    </label>
                    <Field
                      name="type"
                      type="text"
                      onChange={handleChange("type")}
                      onBlur={handleBlur("type")}
                      placeholder="Firm-Ground"
                      className={`input-bordered input w-full`}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Price:</span>
                    </label>
                    <Field
                      name="price"
                      type="number"
                      onChange={handleChange("price")}
                      onBlur={handleBlur("price")}
                      placeholder="120.00"
                      className={`input-bordered input w-full`}
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Collection:</span>
                    </label>
                    <div className="">
                      <ComboBox
                        label=""
                        name="collection"
                        options={
                          collections?.map((collections) => collections.name) ||
                          []
                        }
                      />
                    </div>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Vendor:</span>
                    </label>
                    <div className="">
                      <ComboBox
                        label=""
                        name="vendor"
                        options={vendors?.map((vendor) => vendor.name) || []}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse border-t pt-2">
                  <button className="btn-primary btn" type="submit">
                    Save
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ProtectedAdminLayout>
  );
};

export default NewProduct;
