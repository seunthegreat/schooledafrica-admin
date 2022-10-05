import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BuildByDevelopers from "./components/template/importExam";
import SuiBox from "components/SuiBox";

function Exams() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <BuildByDevelopers />
      </SuiBox>
    </DashboardLayout>
  );
}

export default Exams;
