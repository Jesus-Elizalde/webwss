// import { useRouter } from "next/router";
import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

// import * as Yup from "yup";
// import { Field, FieldArray, Form, Formik } from "formik";
// import { api } from "~/utils/api";

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
//         compareAtPrice: Yup.number(),
//         taxable: Yup.boolean().required(),
//         stock: Yup.number().min(0, "Cannot be a Negative Number").required(),
//         color: Yup.string().required(),
//         size: Yup.string().required(),
//       })
//     )
//     .required(),
// });

const NewProduct = () => {
  // const router = useRouter();
  // const { data: collections } = api.collection.getAll.useQuery();
  // const { data: tags } = api.tag.getAll.useQuery();

  // const createProduct = api.product.create.useMutation({
  //   onSuccess: () => {
  //     void router.push("/admin/products");
  //   },
  //   onError: (err) => {
  //     console.log(err.data);
  //   },
  // });

  // const initValues: Yup.InferType<typeof productSchema> = {
  //   description: "",
  //   vendor: "",
  //   productType: "",
  //   title: "",
  //   status: "Active",
  //   tags: ["men"],
  //   collections: ["9"],
  //   images: [],
  //   variants: [
  //     {
  //       title: "",
  //       sku: "",
  //       barcode: "",
  //       price: 0,
  //       compareAtPrice: 0,
  //       taxable: true,
  //       stock: 0,
  //       color: "",
  //       size: "",
  //     },
  //   ],
  // };
  return (
    <ProtectedAdminLayout>
      <div className="flex flex-col gap-4 px-3 py-4"></div>
    </ProtectedAdminLayout>
  );
};

export default NewProduct;
