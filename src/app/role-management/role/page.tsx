"use client";

import React, { useState } from "react";
import role from "@/assets/role.png"; // ✅ Fixed typo: 'assests' → 'assets'
import RoleList from "@/app/role-management/role/role-details/RoleList";
import EmptyState from "@/components/emptyState/EmptyState";
import Drawer from "@/components/ui/Drawer";
import { useRouter } from "next/navigation";
import useNavigation from "@/hooks/useNavigation";
import CreateRoleForm from "@/components/role/CreateRoleForm";

const RoleManagement: React.FC = () => {
  const router = useRouter();
  const { handleBack } = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // ✅ Open Drawer
  const handleCreateRole = (): void => {
    setIsDrawerOpen(true);
  };

  // ✅ Close Drawer
  const handleCloseDrawer = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      {/* Optional: Empty state view if you need it */}
      {/* 
      <EmptyState
        iconSrc={role}
        iconAlt="No Roles Added"
        title="No Roles Added Yet"
        description={
          <>
            You haven’t added any roles. Create a role to start managing <br />
            permissions, access levels, and responsibilities.
          </>
        }
        backButtonText="Back"
        createButtonText="Create Role"
        onCreateClick={handleCreateRole}
        onBackClick={handleBack}
      />
      */}

      {/* ✅ Role list with Create Role button */}
      <RoleList onCreateRole={handleCreateRole} />

      {/* ✅ Drawer with CreateRoleForm */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        title="Create Role"
      >
        <CreateRoleForm onClose={handleCloseDrawer} />
      </Drawer>
    </div>
  );
};

export default RoleManagement;
