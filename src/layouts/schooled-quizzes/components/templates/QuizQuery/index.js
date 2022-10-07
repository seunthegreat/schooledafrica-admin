import PropTypes from "prop-types";
import React from "react";
//import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Select from "react-select";

function QuizQuery({
  courses,
  modules,
  contents,
  handleSelectCourse,
  handleSelectModule,
  handleSelectContent,
}) {
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
            <Select options={courses} onChange={(value) => handleSelectCourse(value)} />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6} className="ml-auto relative">
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Module
              </SuiTypography>
            </SuiBox>
            <Select options={modules} onChange={(value) => handleSelectModule(value)} />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Content
              </SuiTypography>
            </SuiBox>
            <Select options={contents} onChange={(value) => handleSelectContent(value)} />
          </SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

QuizQuery.propTypes = {
  courses: PropTypes.array,
  contents: PropTypes.array,
  modules: PropTypes.array,
  handleSelectCourse: PropTypes.func,
  handleSelectModule: PropTypes.func,
  handleSelectContent: PropTypes.func,
};

export default QuizQuery;
