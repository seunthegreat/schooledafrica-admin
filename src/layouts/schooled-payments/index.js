import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import History from "./components/templates/History";

function Payments() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <History />
    </DashboardLayout>
  );
}

export default Payments;
