// import { useRouter } from "next/router";
// import React from "react";
// import { api } from "~/utils/api";
// import * as Yup from "yup";
// import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
// import { Field, FieldArray, Form, Formik } from "formik";
// import isEqual from "lodash.isequal";

// const productSchema = Yup.object().shape({
//   title: Yup.string().required(),
//   description: Yup.string(),
//   status: Yup.string().required(),
//   vendor: Yup.string(),
//   productType: Yup.string(),
//   tags: Yup.array().of(Yup.string().required()).required(),
//   collections: Yup.array().of(Yup.string().required()).required(),
//   images: Yup.array()
//     .of(
//       Yup.string()
//         .url("Please enter a valid URL")
//         .matches(
//           /\.(jpg|jpeg|png|gif|webp)$/i,
//           "Please enter a valid image URL (jpg, jpeg, png, or gif,webp)"
//         )
//         .required()
//     )
//     .required(),
//   variants: Yup.array()
//     .of(
//       Yup.object().shape({
//         title: Yup.string(),
//         sku: Yup.string(),
//         barcode: Yup.string(),
//         price: Yup.number().min(0, "Cannot be a Negative Number").required(),
//         compareAtPrice: Yup.number().nullable().defined(),
//         taxable: Yup.boolean().required(),
//         stock: Yup.number().min(0, "Cannot be a Negative Number").required(),
//         color: Yup.string().required(),
//         size: Yup.string().required(),
//       })
//     )
//     .required(),
// });

const AdminSingleProductPage = () => {
  // const router = useRouter();
  // const { id } = router.query as { id: string };
  // const { data: product, isLoading: loading } = api.product.getOne.useQuery({
  //   id,
  // });

  // const { data: collections } = api.collection.getAll.useQuery();
  // const { data: tags } = api.tag.getAll.useQuery();

  // const updateProduct = api.product.update.useMutation({
  //   onSuccess: () => {
  //     void router.reload();
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });

  // const deleteProduct = api.product.delete.useMutation({
  //   onSuccess: () => {
  //     void router.push("/admin/products");
  //   },
  //   onError: (err) => {
  //     console.log(err.data);
  //   },
  // });

  // if (loading) {
  //   return <div>Loading</div>;
  // }

  // const initValues: Yup.InferType<typeof productSchema> = {
  //   description: product?.description ? product.description : "",
  //   vendor: product?.vendor ? product.vendor.name : "",
  //   productType: product?.productType ? product.productType.name : "",
  //   title: product ? product.title : "",
  //   status: product ? product.status : "Active",
  //   tags: product?.tags ? product.tags.map((tag) => tag.name) : [],
  //   collections: product?.collections
  //     ? product.collections.map((collection) => collection.id.toString())
  //     : [],
  //   images: product?.images ? product.images.map((image) => image.url) : [],
  //   variants: product?.variants
  //     ? product.variants.map((variant) => {
  //         return {
  //           title: variant.title as string | undefined,
  //           sku: variant.sku as string | undefined,
  //           barcode: variant.barcode as string | undefined,
  //           price: variant.price,
  //           compareAtPrice: variant.compareAtPrice,
  //           taxable: variant.taxable,
  //           stock: variant.stock,
  //           color: variant.color as string,
  //           size: variant.size as string,
  //         };
  //       })
  //     : [
  //         {
  //           title: "",
  //           sku: "",
  //           barcode: "",
  //           price: 0,
  //           compareAtPrice: 0,
  //           taxable: true,
  //           stock: 0,
  //           color: "",
  //           size: "",
  //         },
  //       ],
  // };

  // return (
  //   <ProtectedAdminLayout>
  //     <div className="flex flex-col gap-4 px-3 py-4">
  //       <div className="btn-sm btn w-14" onClick={() => router.back()}>
  //         Back
  //       </div>
  //       <div>Add product</div>
  //       <Formik
  //         initialValues={initValues}
  //         validationSchema={productSchema}
  //         onSubmit={(values, actions) => {
  //           console.log({ values, actions });
  //           updateProduct.mutate({ id: +id, ...values });
  //         }}
  //       >
  //         {({ values, errors, resetForm }) => (
  //           <Form className="flex flex-col gap-4">
  //             <div className="card-bordered card bg-base-200 p-2">
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Title</span>
  //                 </label>
  //                 <Field
  //                   name="title"
  //                   type="text"
  //                   placeholder="22/23 Champions League Official Ball"
  //                   className={`input-bordered input w-full ${
  //                     errors.title ? "input-error" : ""
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
  //                   placeholder="This product...."
  //                 />
  //               </div>
  //             </div>
  //             <div className="card-bordered card bg-base-200 p-2">
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Media</span>
  //                 </label>
  //                 <FieldArray
  //                   name="images"
  //                   render={(arrayHelpers) => (
  //                     <>
  //                       <div className="flex items-start gap-2">
  //                         <div>
  //                           {values.images &&
  //                             values.images.map((image, index) => (
  //                               <div key={index}>
  //                                 <Field
  //                                   name={`images.${index}`}
  //                                   className="input-bordered input w-full"
  //                                 />

  //                                 <button
  //                                   type="button"
  //                                   className="ml-2"
  //                                   onClick={() => arrayHelpers.remove(index)} // remove a image from the list
  //                                 >
  //                                   -
  //                                 </button>
  //                               </div>
  //                             ))}
  //                         </div>
  //                         <button
  //                           type="button"
  //                           onClick={() => arrayHelpers.push("")} // insert an empty string at a position
  //                         >
  //                           +
  //                         </button>
  //                       </div>
  //                     </>
  //                   )}
  //                 />
  //                 {/* <input
  //                   type="text"
  //                   placeholder="https://"
  //                   className="input-bordered input w-full"
  //                 /> */}
  //               </div>
  //             </div>

  //             <div className="card-bordered card bg-base-200 p-2">
  //               <div>Variants </div>
  //               <div className="w-full overflow-x-auto">
  //                 <FieldArray
  //                   name="variants"
  //                   render={(arrayHelpers) => (
  //                     <table className="table w-full">
  //                       <thead>
  //                         <tr>
  //                           <th>
  //                             <label>
  //                               <input type="checkbox" className="checkbox" />
  //                               Variant
  //                               <button
  //                                 type="button"
  //                                 onClick={() =>
  //                                   arrayHelpers.push({
  //                                     title: "",
  //                                     sku: "",
  //                                     barcode: "",
  //                                     price: 0,
  //                                     compareAtPrice: 0,
  //                                     taxable: true,
  //                                     stock: 0,
  //                                     color: "",
  //                                     size: "",
  //                                   })
  //                                 } // insert an empty string at a position
  //                               >
  //                                 +
  //                               </button>
  //                             </label>
  //                           </th>
  //                           <th>Price</th>
  //                           <th>Compare at price</th>
  //                           <th>Size</th>
  //                           <th>Color</th>
  //                           <th>Stock</th>
  //                           <th>SKU</th>
  //                           <th>Barcode</th>
  //                           <th>Taxable</th>
  //                           <th></th>
  //                         </tr>
  //                       </thead>
  //                       <tbody>
  //                         {values.variants.map((variant, idx) => (
  //                           <tr key={idx}>
  //                             <th>
  //                               <div className="flex items-center space-x-3">
  //                                 <label>
  //                                   <input
  //                                     type="checkbox"
  //                                     className="checkbox"
  //                                   />
  //                                 </label>
  //                                 {variant.title}
  //                               </div>
  //                             </th>
  //                             <td>
  //                               <Field
  //                                 type="number"
  //                                 name={`variants.${idx}.price`}
  //                                 placeholder="0.00"
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="number"
  //                                 name={`variants.${idx}.compareAtPrice`}
  //                                 placeholder="0.00"
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="text"
  //                                 name={`variants.${idx}.size`}
  //                                 placeholder="M"
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="text"
  //                                 name={`variants.${idx}.color`}
  //                                 placeholder="Red"
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="number"
  //                                 name={`variants.${idx}.stock`}
  //                                 placeholder="0.00"
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="text"
  //                                 name={`variants.${idx}.sku`}
  //                                 id=""
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="text"
  //                                 name={`variants.${idx}.barcode`}
  //                                 id=""
  //                                 className="input-bordered input"
  //                               />
  //                             </td>
  //                             <td>
  //                               <Field
  //                                 type="checkbox"
  //                                 name={`variants.${idx}.taxable`}
  //                                 className="checkbox"
  //                               />
  //                             </td>
  //                             <td>
  //                               <button
  //                                 type="button"
  //                                 className="ml-2"
  //                                 onClick={() => arrayHelpers.remove(idx)} // remove a image from the list
  //                               >
  //                                 -
  //                               </button>
  //                             </td>
  //                           </tr>
  //                         ))}
  //                       </tbody>
  //                     </table>
  //                   )}
  //                 />
  //               </div>
  //             </div>
  //             <div className="card-bordered card bg-base-200 p-2">
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Status</span>
  //                 </label>
  //                 <Field
  //                   as="select"
  //                   name="status"
  //                   className="select-bordered select w-full"
  //                 >
  //                   <option value="Active">Active</option>
  //                   <option value="Draft">Draft</option>
  //                 </Field>
  //               </div>
  //             </div>
  //             <div className="card-bordered card bg-base-200 p-2">
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Product type</span>
  //                 </label>
  //                 <Field
  //                   type="text"
  //                   name="productType"
  //                   className="input-bordered input"
  //                 />
  //               </div>
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Vendor</span>
  //                 </label>
  //                 <Field
  //                   type="text"
  //                   name="vendor"
  //                   className="input-bordered input"
  //                 />
  //               </div>
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Collections</span>
  //                 </label>
  //                 <FieldArray
  //                   name="collections"
  //                   render={(arrayHelpers) => (
  //                     <>
  //                       <div className="flex items-start gap-2">
  //                         <div>
  //                           {values.collections &&
  //                             values.collections.map((collection, index) => (
  //                               <div key={index}>
  //                                 <Field
  //                                   as="select"
  //                                   name={`collections.${index}`}
  //                                 >
  //                                   {collections?.map(({ name, id }) => (
  //                                     <option value={id} key={id}>
  //                                       {name}
  //                                     </option>
  //                                   ))}
  //                                 </Field>
  //                                 {values.collections.length > 1 && (
  //                                   <button
  //                                     type="button"
  //                                     className="ml-2"
  //                                     onClick={() => arrayHelpers.remove(index)} // remove a collection from the list
  //                                   >
  //                                     -
  //                                   </button>
  //                                 )}
  //                               </div>
  //                             ))}
  //                         </div>
  //                         <button
  //                           type="button"
  //                           onClick={() => arrayHelpers.push("")} // insert an empty string at a position
  //                         >
  //                           +
  //                         </button>
  //                       </div>
  //                     </>
  //                   )}
  //                 />
  //               </div>
  //               <div className="form-control w-full">
  //                 <label className="label">
  //                   <span className="label-text">Tags</span>
  //                 </label>
  //                 <FieldArray
  //                   name="tags"
  //                   render={(arrayHelpers) => (
  //                     <>
  //                       <div className="flex items-start gap-2">
  //                         <div>
  //                           {values.tags &&
  //                             values.tags.map((tag, index) => (
  //                               <div key={index}>
  //                                 <Field as="select" name={`tags.${index}`}>
  //                                   {tags?.map(({ name, id }) => (
  //                                     <option value={name} key={id}>
  //                                       {name}
  //                                     </option>
  //                                   ))}
  //                                 </Field>
  //                                 {values.tags.length > 1 && (
  //                                   <button
  //                                     type="button"
  //                                     className="ml-2"
  //                                     onClick={() => arrayHelpers.remove(index)} // remove a collection from the list
  //                                   >
  //                                     -
  //                                   </button>
  //                                 )}
  //                               </div>
  //                             ))}
  //                         </div>
  //                         <button
  //                           type="button"
  //                           onClick={() => arrayHelpers.push("")} // insert an empty string at a position
  //                         >
  //                           +
  //                         </button>
  //                       </div>
  //                     </>
  //                   )}
  //                 />

  //                 {/* <input
  //                   type="text"
  //                   name=""
  //                   id=""
  //                   className="input-bordered input"
  //                 />
  //                 <label className="mt-2 flex flex-wrap gap-2">
  //                   <span className="badge">Apparel X</span>
  //                   <span className="badge">Men X</span>
  //                   <span className="badge">Women X</span>
  //                 </label> */}
  //               </div>
  //             </div>
  //             <div className="flex flex-row-reverse gap-2 border-t pt-2">
  //               <button
  //                 className="btn-primary btn"
  //                 type="submit"
  //                 disabled={isEqual(initValues, values)}
  //               >
  //                 Save
  //               </button>
  //               {!isEqual(initValues, values) && (
  //                 <div className="btn-outline btn" onClick={() => resetForm()}>
  //                   Discard
  //                 </div>
  //               )}
  //               <div
  //                 className="btn-outline btn-error btn"
  //                 onClick={() =>
  //                   deleteProduct.mutate({
  //                     id,
  //                   })
  //                 }
  //               >
  //                 Delete collection
  //               </div>
  //             </div>
  //             <div>{JSON.stringify(errors)}</div>
  //           </Form>
  //         )}
  //       </Formik>
  //     </div>
  //   </ProtectedAdminLayout>
  // );

  return <div></div>;
};

export default AdminSingleProductPage;
