import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function EditCourses() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
    </DashboardLayout>
  );
}

export default EditCourses;
