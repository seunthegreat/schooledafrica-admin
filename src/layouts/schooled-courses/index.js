import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { Grid } from "@mui/material";
import styles from "./styles";
import EditIcon from "@mui/icons-material/Edit";

import LevelApi from "api/Level";
import CourseApi from "api/Course";
import { useAuth } from "auth-context/auth.context";

import Select from "react-select";

import kal from "assets/images/kal-visuals-square.jpg";

function Courses() {
  const classes = styles();
  let { user } = useAuth();

  const [levels, setLevels] = useState([]);

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
        //setCourses(optionArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectLevel = (value) => {
    console.log(value);
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
      <SuiBox alignContent="center" display="flex" justifyContent="center">
        <Grid mt={2} container spacing={4}>
          <Grid item xs={12} lg={3}>
            <Card className={classes.courseCard}>
              <SuiBox customClass={classes.courseCard_imageContainer}>
                <CardMedia
                  sx={{ width: "100%" }}
                  src={kal}
                  component="img"
                  className={classes.courseCard_image}
                />
                <SuiBox px={2} mb={0.5} display="flex" flexDirection="row" height="100%">
                  <SuiBox width="80%">
                    <SuiTypography variant="h6" fontWeight="bold" mt={1.5} gutterBottom>
                      Law Of Indices
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox display="flex" width="20%" justifyContent="center" alignItems="center">
                    <EditIcon sx={{ color: "#D3D3D3" }} />
                  </SuiBox>
                </SuiBox>
              </SuiBox>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Courses;
