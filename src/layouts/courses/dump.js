import { useState } from "react";
//-- Soft UI Dashboard React example components --//
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
//import Footer from "examples/Footer";

import SuiBox from "components/SuiBox";
import CourseCard from "components/CourseCard";
import SoftButton from "components/SuiButton";

//--material ui--//
import Grid from "@mui/material/Grid";

//--data point--//
//import coursesArr from "./data/courses";

//--components here--//
//import ProfilesList from "examples/ProfilesList";
//import CourseList from "./components/CourseList";

//--Images--//
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import phonetics from "assets/images/phonetics.jpeg";
import algebra from "assets/images/algebra.jpeg";
import chemistry from "assets/images/chemistry.jpeg";

function Courses() {
  const [addCourse, setAddCourse] = useState(false);
  //const [buttonText, setButtonText] = useState('Add Course');

  const renderView = () => {
    if (addCourse) {
      return (
        <SuiBox pt={2} px={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <CourseCard
                image={algebra}
                label="SS1"
                title="Mathematics"
                description="Introduction to Linear algebra and  statistics"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view course",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <CourseCard
                image={phonetics}
                label="SS2"
                title="English"
                description="Phonetics and lingual expressions part one"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view course",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <CourseCard
                image={chemistry}
                label="SS1"
                title="Chemistry"
                description="Introduction to organic chemistry"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view course",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <CourseCard
                image={chemistry}
                label="SS3"
                title="Chemistry"
                description="Radioactive Isotopes"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view course",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <CourseCard
                image={chemistry}
                label="SS2"
                title="Chemistry"
                description="Acid, Base and Salts"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view course",
                }}
              />
            </Grid>
          </Grid>
        </SuiBox>
      );
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pt={2} px={2} mb={1} display="flex" alignItems="right" justifyContent="right">
        <SoftButton variant="outlined" buttonColor="secondary" onClick={() => setAddCourse(!true)}>
          Add Course
        </SoftButton>
      </SuiBox>
      {renderView}
      {/* <SuiBox pt={2} px={2}>
        <CourseList title="SS2" Courses={coursesArr} />
      </SuiBox> */}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Courses;
