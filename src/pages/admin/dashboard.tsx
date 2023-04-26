import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

const AdminPage = () => {
  return (
    <ProtectedAdminLayout>
      <div>Dashboard</div>
    </ProtectedAdminLayout>
  );
};

export default AdminPage;
