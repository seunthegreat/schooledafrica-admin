import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import React from "react";
import { Grid } from "@mui/material";
import CourseCard from "../atom/CourseCard";
import kal from "assets/images/kal-visuals-square.jpg";
import { useHistory } from "react-router-dom";

// const courses = [
//   {
//     id: 0,
//     name: "Physics",
//     img: "https://myschooledafricabucket.s3.ap-south-1.amazonaws.com/mathematics.jpeg",
//   },
//   {
//     id: 1,
//     name: "Chemistry",
//     img: kal,
//   },
//   {
//     id: 2,
//     name: "Biology",
//     img: kal,
//   },
//   {
//     id: 3,
//     name: "Mathematics",
//     img: kal,
//   },
//   {
//     id: 4,
//     name: "Mathematics",
//     img: kal,
//   },
// ];

const Courses = ({ name, modules, id }) => {
  const history = useHistory();
  const handleEdit = (name, description, contents, moduleId) => {
    history.push("/editCourses", {
      courseId: id,
      moduleId: moduleId,
      title: name,
      description: description,
      contents: contents,
    });
  };
  return (
    <SuiBox width="100%" key={id}>
      <SuiBox key={name} my={2} display="flex" flexDirection="row" width="100%">
        <SuiBox width="15%">
          <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
            {name}
          </SuiTypography>
        </SuiBox>
        <SuiBox width="85%">
          <Divider />
        </SuiBox>
      </SuiBox>
      <SuiBox my={5} alignContent="center" display="flex" justifyContent="center">
        <Grid container sx={{ alignItems: "center", justifyContent: "left" }} spacing={4}>
          {modules.map((e) => {
            return (
              <Grid item xs={12} md={6} xl={2.3} key={e.id}>
                <CourseCard
                  title={e.name}
                  image={kal}
                  onPress={() => handleEdit(e.name, e.description, e.contents, e.id)}
                />
              </Grid>
            );
          })}
        </Grid>
      </SuiBox>
    </SuiBox>
  );
};

Courses.propTypes = {
  name: PropTypes.string,
  modules: PropTypes.array,
  //key: PropTypes.number,
  id: PropTypes.number,
};

export default Courses;
