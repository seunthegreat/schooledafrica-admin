import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UploadExam from "./components/template/importExam/index";
import ExamRecord from "./components/template/importExam/ExamRecord";
import SuiBox from "components/SuiBox";

function Exams() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <UploadExam />
        <ExamRecord />
      </SuiBox>
    </DashboardLayout>
  );
}

export default Exams;
