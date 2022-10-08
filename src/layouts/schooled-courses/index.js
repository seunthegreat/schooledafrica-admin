import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import CourseList from "./components/molecules/Courses";
//import { Grid } from "@mui/material";

import LevelApi from "api/Level";
import CourseApi from "api/Course";
import { useAuth } from "auth-context/auth.context";

import Select from "react-select";
//import CourseCard from "./components/atom/CourseCard";

//import kal from "assets/images/kal-visuals-square.jpg";

function Courses() {
  let { user } = useAuth();

  const [levels, setLevels] = useState([]);
  const [courses, setCourses] = useState([]);

  const fetchLevels = async () => {
    const token = user.token;
    try {
      let response = await LevelApi.GetLevels({ token });
      let levelList = response.data.response;
      if (levelList !== null) {
        let optionArr = [];
        let options = response.data.response;
        for (let i = 0; i < options.length; i++) {
          let option = {};
          let label = options[i].name.trim();
          option["value"] = label;
          option["label"] = label.charAt(0).toUpperCase() + label.slice(1);
          option["levelId"] = options[i].id;
          optionArr.push(option);
        }
        setLevels(optionArr);
        // console.log(optionArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLevels();
  }, []);

  //--getCourses from api--//
  const fetchCourses = async (id) => {
    let levelId = id;
    const token = user.token;
    try {
      let response = await CourseApi.GetCoursesByLevel({ levelId, token });
      let coursesList = response.data.response;
      if (coursesList !== null) {
        //console.log(response.data.response);
        let optionArr = [];
        let options = response.data.response;

        if (options == null) {
          optionArr = [];
          console.log("Courses :", optionArr);
          return;
        }

        for (let i = 0; i < options.length; i++) {
          let option = {};
          let label = options[i].name.trim();
          option["value"] = label;
          option["label"] = label.charAt(0).toUpperCase() + label.slice(1);
          option["courseId"] = options[i].id;
          optionArr.push(option);
        }
        console.log("Courses :", optionArr);
        setCourses(optionArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectLevel = (value) => {
    //console.log(value);
    //setLevelId(value.contentId);
    fetchCourses(value.levelId);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox display="flex" justifyContent="center" m={2}>
        <SuiBox width="40%" justifyContent="center">
          <SuiTypography variant="caption" fontWeight="bold" gutterBottom>
            Select A Level
          </SuiTypography>
          <Select options={levels} onChange={handleSelectLevel} />
        </SuiBox>
      </SuiBox>
      {/* <SuiBox alignContent="center" display="flex" justifyContent="center">
        <Grid mt={2} container spacing={4}>
          <Grid item xs={12} lg={3}>
            <CourseCard title="SSS 1" image={kal} onPress={() => console.log("works")} />
          </Grid>
        </Grid>
      </SuiBox> */}
      {courses.map((e) => {
        return <CourseList name={e.value} key={e.courseId} />;
      })}
    </DashboardLayout>
  );
}

export default Courses;
