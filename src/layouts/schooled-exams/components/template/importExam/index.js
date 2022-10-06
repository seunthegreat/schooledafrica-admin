import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the BuildByDevelopers
//import styles from "layouts/dashboard/components/BuildByDevelopers/styles";
import { TextField } from "@mui/material";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

import AddExam from "../AddExam";
import WorkWithExam from "../WorkWithExam";

import ExamApi from "api/Exam";
import { useAuth } from "auth-context/auth.context";

function BuildByDevelopers() {
  let { user } = useAuth();
  //const classes = styles();
  const [file, setFile] = useState(null);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0], file);
  };

  const handleCancel = () => {
    setFile(null);
  };

  const uploadExamFile = async (file) => {
    const token = user.token;
    let formData = new FormData();
    formData.append("file", file);
    try {
      console.log("formData", formData);
      let response = await ExamApi.uploadExamCSV({ formData, token });
      console.log("Response ", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <SuiBox p={2}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <AddExam />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithExam />
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiTypography variant="h5" fontWeight="bold" m={2} gutterBottom>
                Upload Exam
              </SuiTypography>
              <SuiBox height="100%" alignItems="center" display="flex" width="100%" py={2}>
                <TextField
                  name="upload-photo"
                  style={{ width: "100%" }}
                  type="file"
                  onChange={handleFile}
                />
              </SuiBox>
              <SuiBox display="flex" flexDirection="row" width="100%">
                <SuiBox width="60%">
                  <SuiButton
                    fullWidth
                    variant="gradient"
                    buttonColor="info"
                    onClick={() => uploadExamFile(file)}
                  >
                    Upload
                  </SuiButton>
                </SuiBox>
                <SuiBox
                  display="flex"
                  alignItems="center"
                  width="40%"
                  ml={2}
                  justifyContent="center"
                >
                  <SuiButton
                    variant="outlined"
                    buttonColor="info"
                    size="small"
                    fullWidth
                    onClick={handleCancel}
                  >
                    Cancel
                  </SuiButton>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Grid>
          <Grid item xs={12} lg={5} className="ml-auto relative">
            <SuiBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              backgroundColor="info"
              borderRadius="lg"
              backgroundGradient
            >
              <SuiBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SuiBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default BuildByDevelopers;
