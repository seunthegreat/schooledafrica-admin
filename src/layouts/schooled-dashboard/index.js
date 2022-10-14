import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Dashboard layout components
import Projects from "./components/templates/Progress";
import OrderOverview from "./components/templates/StatementOverview";

import Grid from "@mui/material/Grid";

import MiniStats from "./components/templates/MiniStats";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MiniStats />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <Projects />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <OrderOverview />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
