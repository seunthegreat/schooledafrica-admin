import React, { useEffect, useState } from "react";
//import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Select from "react-select";

import { useAuth } from "auth-context/auth.context";
import CourseApi from "api/Course";
import ModulesApi from "api/Module";

// Custom styles for the BuildByDevelopers
//import styles from "layouts/dashboard/components/BuildByDevelopers/styles";

// Images
//import wavesWhite from "assets/images/shapes/waves-white.svg";
//import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  let { user } = useAuth();
  const token = user.token;
  const courseArr = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [contents, setContents] = useState([]);

  //--getCourses from api--//
  const fetchCourses = async () => {
    try {
      let response = await CourseApi.GetCourses({ token });
      let coursesList = response.data.response;
      if (coursesList !== null) {
        console.log(response.data.response);
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
        // console.log("Courses :", optionArr);
        setCourses(optionArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //--getModules from api--//
  const fetchModules = async (courseId) => {
    let course_id = courseId;
    let data = {
      course_id,
      token,
    };
    try {
      let response = await ModulesApi.GetModules(data);
      let modulesList = response.data.response;
      if (modulesList !== null) {
        console.log(response.data.response);
        let optionArr = [];
        let options = response.data.response;
        for (let i = 0; i < options.length; i++) {
          let option = {};
          let label = options[i].name.trim();
          option["value"] = label;
          option["label"] = label.charAt(0).toUpperCase() + label.slice(1);
          option["moduleId"] = options[i].id;
          optionArr.push(option);
        }
        setModules(optionArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //--getModulesContents from api--//
  const fetchModulesContent = async (moduleId) => {
    let module_id = moduleId;
    let data = {
      module_id,
      token,
    };
    try {
      let response = await ModulesApi.GetModulesContent(data);
      let contentList = response.data.response;
      if (contentList !== null) {
        console.log("contents", response.data.response);
        let optionArr = [];
        let options = response.data.response;
        for (let i = 0; i < options.length; i++) {
          let option = {};
          let label = options[i].name.trim();
          option["value"] = label;
          option["label"] = label.charAt(0).toUpperCase() + label.slice(1);
          option["contentId"] = options[i].id;
          optionArr.push(option);
        }
        setContents(optionArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectCourse = (value) => {
    fetchModules(value.courseId);
  };

  const handleSelectModule = (value) => {
    fetchModulesContent(value.moduleId);
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <SuiBox p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Course
              </SuiTypography>
            </SuiBox>
            <Select
              options={courses}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Not Focused")}
              onChange={(value) => handleSelectCourse(value)}
            />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6} className="ml-auto relative">
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Module
              </SuiTypography>
            </SuiBox>
            <Select
              options={modules}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Not Focused")}
              onChange={(value) => handleSelectModule(value)}
            />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Content
              </SuiTypography>
            </SuiBox>
            <Select
              options={contents}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Not Focused")}
              onChange={() => console.log("Value Changed")}
            />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6} className="ml-auto relative">
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Changes
              </SuiTypography>
            </SuiBox>
            <Select
              options={courseArr}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Not Focused")}
              onChange={() => console.log("Value Changed")}
            />
          </SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default BuildByDevelopers;
