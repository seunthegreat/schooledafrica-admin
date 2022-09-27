import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MiniStats from "./components/templates/MiniStats";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MiniStats />
    </DashboardLayout>
  );
}

export default Dashboard;
