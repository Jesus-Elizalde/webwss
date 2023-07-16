// import React from "react";
// import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
// import { api } from "~/utils/api";
// import Link from "next/link";
// import Image from "next/image";

const CollectionPage = () => {
  // const { data: collections } = api.collection.getAll.useQuery();
  // return (
  //   <ProtectedAdminLayout>
  //     <div className="flex flex-col">
  //       <div className="flex justify-between">
  //         Collections
  //         <div className="flex gap-2">
  //           <div className="dropdown-bottom dropdown-end dropdown">
  //             <label tabIndex={0} className="btn">
  //               ...
  //             </label>
  //             <ul
  //               tabIndex={0}
  //               className="dropdown-content menu rounded-box w-32 bg-base-100 p-2 shadow"
  //             >
  //               <li>
  //                 <a>Export</a>
  //               </li>
  //               <li>
  //                 <a>Import</a>
  //               </li>
  //             </ul>
  //           </div>
  //           <Link href="/admin/collections/new" className="btn-primary btn">
  //             Create Collection
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="w-full overflow-x-auto">
  //         <table className="table w-full">
  //           <thead>
  //             <tr>
  //               <th>
  //                 <label>
  //                   <input type="checkbox" className="checkbox" />
  //                 </label>
  //               </th>
  //               <th>Title</th>
  //               <th>Products</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {collections?.map((collection) => {
  //               return (
  //                 <tr key={collection.id}>
  //                   <th>
  //                     <div className="flex items-center space-x-3">
  //                       <label>
  //                         <input type="checkbox" className="checkbox" />
  //                       </label>
  //                       <div className="avatar">
  //                         <Link
  //                           href={`/admin/collections/${collection.id}`}
  //                           className="mask mask-squircle h-12 w-12"
  //                         >
  //                           <Image
  //                             src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/notfoundimg.jpg"
  //                             alt="Avatar Tailwind CSS Component"
  //                             width={24}
  //                             height={24}
  //                           />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                   </th>
  //                   <td>
  //                     <Link href={`/admin/collections/${collection.id}`}>
  //                       {collection.name}
  //                     </Link>
  //                   </td>
  //                   <td>
  //                     <Link href={`/admin/collections/${collection.id}`}>
  //                       {collection.products.length}
  //                     </Link>
  //                   </td>
  //                 </tr>
  //               );
  //             })}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </ProtectedAdminLayout>
  // );
  return <div></div>;
};

export default CollectionPage;
