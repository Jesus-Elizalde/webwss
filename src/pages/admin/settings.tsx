import React from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";

const SettingsPage = () => {
  return (
    <ProtectedAdminLayout>
      <div>Setting page</div>
    </ProtectedAdminLayout>
  );
};

export default SettingsPage;
