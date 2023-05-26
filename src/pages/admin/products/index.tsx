// import React, { useState } from "react";
// import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
// import Modal from "~/components/Modal";
// import { api } from "~/utils/api";

// import * as Yup from "yup";

// import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import ProductTable from "~/components/Table/ProductTable";
// import { CollectionType, ProductColor } from "@prisma/client";

// const productSchema = Yup.object().shape({
//   name: Yup.string().required("Is Required"),
//   description: Yup.string(),
//   variants: Yup.array()
//     .of(
//       Yup.object().shape({
//         barcode: Yup.string(),
//         modelNum: Yup.string(),
//         published: Yup.boolean().required(),
//         colors: Yup.array()
//           .of(
//             Yup.mixed<ProductColor>()
//               .oneOf(Object.values(ProductColor))
//               .required()
//           )
//           .required(),
//         detailedColors: Yup.array().of(Yup.string().required()).required(),
//         size: Yup.string().required("Is Required"),
//         description: Yup.string(),
//         stock: Yup.number().min(0, "Cannot be a negative number").required(),
//         price: Yup.number().min(0, "Cannot be a negative number").required(),
//       })
//     )
//     .required("Is Required"),
//   modelId: Yup.number()
//     .min(1, "Please Select an option")
//     .required("Is Required"),
//   collectionId: Yup.number()
//     .min(1, "Please Select an option")
//     .required("Is Required"),
//   types: Yup.array()
//     .of(
//       Yup.mixed<CollectionType>()
//         .oneOf(Object.values(CollectionType))
//         .required()
//     )
//     .required(),
// });

// const InventoryPage = () => {
//   const { data: products, refetch: refetchProducts } =
//     api.product.getAll.useQuery();

//   const { data: models } = api.model.getAll.useQuery();
//   const { data: collections } = api.collection.getAll.useQuery();
//   const [open, setOpen] = useState(false);
//   const handleToggle = () => setOpen((prev) => !prev);

//   const createProduct = api.product.create.useMutation({
//     onSuccess: () => {
//       void refetchProducts();
//     },
//   });

//   const initValues: Yup.InferType<typeof productSchema> = {
//     name: "",
//     description: "",
//     variants: [],
//     types: ["MEN"],
//     modelId: 0,
//     collectionId: 0,
//   };

//   return (
//     <ProtectedAdminLayout>
//       <>
//         <div>Inventory Page</div>
//         <div className="btn" onClick={() => handleToggle()}>
//           New Product
//         </div>
//         <Modal open={open}>
//           <div>
//             <h1>Create Product</h1>
//             <Formik
//               initialValues={initValues}
//               validationSchema={productSchema}
//               onSubmit={(values, actions) => {
//                 console.log({ values, actions });
//                 createProduct.mutate({
//                   ...values,
//                   modelId: +values.modelId,
//                   collectionId: +values.collectionId,
//                 });
//                 actions.setSubmitting(false);
//                 actions.resetForm();
//                 handleToggle();
//               }}
//             >
//               {({ values, errors }) => (
//                 <Form>
//                   <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                       <span className="label-text">Name:</span>
//                     </label>
//                     <Field
//                       id="name"
//                       name="name"
//                       placeholder="Name"
//                       className={`input-bordered input w-full max-w-xs ${
//                         errors.name ? "input-error" : ""
//                       }`}
//                     />
//                     <label className="label">
//                       <span className="label-text-alt">
//                         <ErrorMessage name="name" />
//                       </span>
//                     </label>
//                   </div>
//                   <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                       <span className="label-text">Description:</span>
//                     </label>
//                     <Field
//                       id="description"
//                       name="description"
//                       placeholder="Description"
//                       className="input-bordered input w-full max-w-xs"
//                     />
//                     <label className="label">
//                       <span className="label-text-alt">
//                         <ErrorMessage name="description" />
//                       </span>
//                     </label>
//                   </div>
//                   <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                       <span className="label-text">Model:</span>
//                     </label>
//                     <Field
//                       id="modelId"
//                       as="select"
//                       name="modelId"
//                       placeholder="Model"
//                       className={`input-bordered input w-full max-w-xs ${
//                         errors.modelId ? "input-error" : ""
//                       }`}
//                     >
//                       <option value={0}>--Please choose an option--</option>
//                       {models?.map(({ id, name }) => (
//                         <option value={+id} key={id}>
//                           {name}
//                         </option>
//                       ))}
//                     </Field>
//                     <label className="label">
//                       <span className="label-text-alt">
//                         <ErrorMessage name="modelId" />
//                       </span>
//                     </label>
//                   </div>
//                   <div className="form-control w-full max-w-xs">
//                     <label className="label">
//                       <span className="label-text">Collection:</span>
//                     </label>
//                     <Field
//                       id="collectionId"
//                       as="select"
//                       name="collectionId"
//                       placeholder="Model"
//                       className={`input-bordered input w-full max-w-xs ${
//                         errors.collectionId ? "input-error" : ""
//                       }`}
//                     >
//                       <option value={0}>--Please choose an option--</option>
//                       {collections?.map(({ id, name }) => (
//                         <option value={+id} key={id}>
//                           {name}
//                         </option>
//                       ))}
//                     </Field>
//                     <label className="label">
//                       <span className="label-text-alt">
//                         <ErrorMessage name="collectionId" />
//                       </span>
//                     </label>
//                   </div>

//                   <div className="form-control w-full max-w-xs ">
//                     <label className="label">
//                       <span className="label-text">Types:</span>
//                     </label>
//                     <FieldArray
//                       name="types"
//                       render={(arrayHelpers) => (
//                         <div>
//                           <div className=" max-h-48 overflow-y-auto rounded bg-base-200 ">
//                             {values.types.map((type, index) => (
//                               <div key={index}>
//                                 <Field
//                                   as="select"
//                                   name={`types.${index}`}
//                                   className="input-bordered input input-xs mb-1 mr-2 w-20 max-w-xs"
//                                 >
//                                   {Object.values(CollectionType).map(
//                                     (type, idx) => (
//                                       <option value={type} key={idx}>
//                                         {type}
//                                       </option>
//                                     )
//                                   )}
//                                 </Field>
//                                 {values.types.length > 1 && (
//                                   <button
//                                     type="button"
//                                     className="btn-error btn-xs btn"
//                                     onClick={() =>
//                                       values.types.length > 1 &&
//                                       arrayHelpers.remove(index)
//                                     }
//                                     // remove a type from the list
//                                   >
//                                     -
//                                   </button>
//                                 )}
//                               </div>
//                             ))}
//                           </div>

//                           <button
//                             type="button"
//                             className=" btn-sm btn mt-2"
//                             onClick={() => arrayHelpers.push("BLACK")}
//                             // insert an empty string at a position
//                           >
//                             +
//                           </button>
//                         </div>
//                       )}
//                     />
//                     <label className="label">
//                       <span className="label-text-alt">
//                         <ErrorMessage name="colors" />
//                       </span>
//                     </label>
//                   </div>

//                   <div className="btn-error btn" onClick={() => handleToggle()}>
//                     Cancel
//                   </div>
//                   <button type="submit" className="btn">
//                     Submit
//                   </button>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </Modal>

//         <ProductTable products={products} />
//       </>
//     </ProtectedAdminLayout>
//   );
// };

import React, { useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import Modal from "~/components/Modal";
import { api } from "~/utils/api";

import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import Link from "next/link";

const InventoryPage = () => {
  const { data: products, refetch: refetchProducts } =
    api.product.getAll.useQuery();

  const { data: models } = api.model.getAll.useQuery();
  const { data: collections } = api.collection.getAll.useQuery();
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      void refetchProducts();
    },
  });

  return (
    <ProtectedAdminLayout>
      <div className="flex flex-col">
        <div className="flex justify-between">
          Products
          <div className="flex gap-2">
            <div className="dropdown-bottom dropdown-end dropdown">
              <label tabIndex={0} className="btn">
                ...
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-32 bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Export</a>
                </li>
                <li>
                  <a>Import</a>
                </li>
              </ul>
            </div>
            <Link href="/admin/products/new" className="btn-primary btn">
              Add product
            </Link>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Product</th>
                <th>Status</th>
                <th>Inventory</th>
                <th>Type</th>
                <th>Vendor</th>
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
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </th>
                <td>Nike Tiempo Academy FG</td>
                <td>
                  <span className="badge-success badge">Active</span>
                </td>
                <td>12 in stock for 6 variants</td>
                <td>Footwear</td>
                <td>Nike</td>
              </tr>
              <tr>
                <th>
                  <div className="flex items-center space-x-3">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </th>
                <td>Nike Tiempo Academy FG</td>
                <td>
                  <span className="badge-success badge">Active</span>
                </td>
                <td>12 in stock for 6 variants</td>
                <td>Footwear</td>
                <td>Nike</td>
              </tr>
              <tr>
                <th>
                  <div className="flex items-center space-x-3">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </th>
                <td>Nike Tiempo Academy FG</td>
                <td>
                  <span className="badge-info badge">Draft</span>
                </td>
                <td>12 in stock for 6 variants</td>
                <td>Footwear</td>
                <td>Nike</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
