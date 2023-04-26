import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

const index = () => {
  return (
    <ProtectedAdminLayout>
      <div>loading</div>
    </ProtectedAdminLayout>
  );
};

export default index;
