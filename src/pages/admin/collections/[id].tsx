import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";
import * as Yup from "yup";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import { Field, Form, Formik } from "formik";
import isEqual from "lodash.isequal";

const collectionSchema = Yup.object().shape({
  name: Yup.string().required(),
  slug: Yup.string().required(),
  description: Yup.string().nullable(),
});

const AdminCollectionProductPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data: collection, isLoading: loading } =
    api.collection.getOne.useQuery({ id });

  const updateCollection = api.collection.update.useMutation({
    onSuccess: () => {
      void router.reload();
    },
    onError: (err) => {
      console.log(err.data);
    },
  });

  const deleteCollection = api.collection.delete.useMutation({
    onSuccess: () => {
      void router.push("/admin/collections");
    },
    onError: (err) => {
      console.log(err.data);
    },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  const initValues: Yup.InferType<typeof collectionSchema> = {
    name: collection ? collection.name : "",
    slug: collection ? collection.slug : "",
    description: collection?.description,
  };

  return (
    <ProtectedAdminLayout>
      <div className="flex flex-col gap-4 px-3 py-4">
        <div className="btn-sm btn w-14" onClick={() => router.back()}>
          Back
        </div>
        <div>Create Collection</div>
        <Formik
          initialValues={initValues}
          validationSchema={collectionSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            updateCollection.mutate({ id: +id, ...values });
          }}
        >
          {({ values, errors, resetForm }) => (
            <Form className="flex flex-col gap-4">
              <div className="card-bordered card bg-base-200 p-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Footwear"
                    className={`input-bordered input w-full ${
                      errors.name ? "input-error" : ""
                    }`}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <Field
                    name="description"
                    as="textarea"
                    className={`textarea-bordered ${
                      errors.description ? "textarea-error" : ""
                    } textarea h-24`}
                    placeholder="This collection...."
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Slug</span>
                  </label>
                  <Field
                    name="slug"
                    type="text"
                    placeholder="footwears"
                    className={`input-bordered input w-full ${
                      errors.slug ? "input-error" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-row-reverse gap-2 border-t pt-2">
                <button
                  className="btn-primary btn"
                  disabled={isEqual(initValues, values)}
                >
                  Save
                </button>
                {!isEqual(initValues, values) && (
                  <div className="btn-outline btn" onClick={() => resetForm()}>
                    Discard
                  </div>
                )}
                <div
                  className="btn-outline btn-error btn"
                  onClick={() =>
                    deleteCollection.mutate({
                      id,
                    })
                  }
                >
                  Delete collection
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ProtectedAdminLayout>
  );
};

export default AdminCollectionProductPage;
