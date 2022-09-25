import { useState } from "react";
//-- Soft UI Dashboard React example components --//
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
//import Footer from "examples/Footer";

//import Card from "@mui/material/Card";

import SuiBox from "components/SuiBox";
import SoftButton from "components/SuiButton";

//--material ui--//
import AddCourse from "../courses/addCourses";
import CourseList from "../courses/courseList";

//--data point--//
//import coursesArr from "./data/courses";

//--components here--//
//import ProfilesList from "examples/ProfilesList";
//import CourseList from "./components/CourseList";

function Courses() {
  const [buttonText, setButtonText] = useState("Add Course");
  const [displayAddCourse, setDisplayAddCourse] = useState(false);
  const [displayCourseList, setDisplayCourseList] = useState(true);

  const handleAddCourse = () => {
    if (displayAddCourse) {
      showCourseListComponent();
      setButtonText("Show Courses");
    }
    if (displayCourseList) {
      showAddCourseComponent();
      setButtonText("Add Course");
    }
  };

  const showAddCourseComponent = () => {
    setDisplayAddCourse(true);
    setDisplayCourseList(false);
  };

  const showCourseListComponent = () => {
    setDisplayAddCourse(false);
    setDisplayCourseList(true);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pt={2} px={2} mb={3} display="flex" alignItems="right" justifyContent="right">
        <SoftButton variant="outlined" buttonColor="secondary" onClick={handleAddCourse}>
          {buttonText}
        </SoftButton>
      </SuiBox>
      {displayAddCourse && <AddCourse />}
      {displayCourseList && <CourseList />}
      {/* <SuiBox pt={2} px={2}>
        <CourseList title="SS2" Courses={coursesArr} />
      </SuiBox> */}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Courses;
