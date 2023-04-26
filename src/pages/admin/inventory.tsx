import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

const InventoryPage = () => {
  return (
    <ProtectedAdminLayout>
      <div>Inventory Page</div>
    </ProtectedAdminLayout>
  );
};

export default InventoryPage;
