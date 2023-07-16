// import { useRouter } from "next/router";
// import React from "react";
// import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

// import * as Yup from "yup";
// import { Field, Form, Formik } from "formik";
// import { api } from "~/utils/api";

// const collectionSchema = Yup.object().shape({
//   name: Yup.string().required(),
//   slug: Yup.string().required(),
//   description: Yup.string(),
// });

const NewCollection = () => {
  // const router = useRouter();

  // const createCollection = api.collection.create.useMutation({
  //   onSuccess: () => {
  //     void router.push("/admin/collections");
  //   },
  //   onError: (err) => {
  //     console.log(err.data);
  //   },
  // });

  // const initValues: Yup.InferType<typeof collectionSchema> = {
  //   name: "",
  //   slug: "",
  //   description: "",
  // };

  // return (
  //   <ProtectedAdminLayout>
  //     <div className="flex flex-col gap-4 px-3 py-4">
  //       <div className="btn-sm btn w-14" onClick={() => router.back()}>
  //         Back
  //       </div>
  //       <div>Create Collection</div>
  //       <Formik
  //         initialValues={initValues}
  //         validationSchema={collectionSchema}
  //         onSubmit={(values, actions) => {
  //           console.log({ values, actions });
  //           createCollection.mutate(values);
  //         }}
  //       >
  //         {({ errors }) => (
  //           <Form className="flex flex-col gap-4">
  //             <div className="card-bordered card bg-base-200 p-2">
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Title</span>
  //                 </label>
  //                 <Field
  //                   name="name"
  //                   type="text"
  //                   placeholder="Footwear"
  //                   className={`input-bordered input w-full ${
  //                     errors.name ? "input-error" : ""
  //                   }`}
  //                 />
  //               </div>
  //               <div className="form-control">
  //                 <label className="label">
  //                   <span className="label-text">Description</span>
  //                 </label>
  //                 <Field
  //                   name="description"
  //                   as="textarea"
  //                   className={`textarea-bordered ${
  //                     errors.description ? "textarea-error" : ""
  //                   } textarea h-24`}
  //                   placeholder="This collection...."
  //                 />
  //               </div>
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Slug</span>
  //                 </label>
  //                 <Field
  //                   name="slug"
  //                   type="text"
  //                   placeholder="footwears"
  //                   className={`input-bordered input w-full ${
  //                     errors.slug ? "input-error" : ""
  //                   }`}
  //                 />
  //               </div>
  //             </div>

  //             <div className="flex flex-row-reverse border-t pt-2">
  //               <button className="btn">Save</button>
  //             </div>
  //           </Form>
  //         )}
  //       </Formik>
  //     </div>
  //   </ProtectedAdminLayout>
  // );
  return <div></div>;
};

export default NewCollection;
