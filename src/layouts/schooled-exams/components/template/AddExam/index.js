import React, { useEffect, useState } from "react";
//import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import Select from "react-select";
import ExamApi from "api/Exam";

import { useAuth } from "auth-context/auth.context";

import Alert from "@mui/material/Alert";

import { examArr, yearArr } from "../../../data/constant";

function AddExam() {
  let { user } = useAuth();

  const [examType, setExamType] = useState(null);
  const [year, setYear] = useState(null);
  const [subject, setSubject] = useState(null);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);

  const handleAddExam = () => {
    if (examType || year || subject === null) {
      setError("Kindly fill up the form to add an exam!");
      setId(null);
    }
    let body = {
      exam_type: examType,
      year: year,
      name: subject,
    };
    addExam(body);
  };

  const addExam = async (body) => {
    const token = user.token;
    try {
      let response = await ExamApi.addExam({ body, token });
      console.log(response.data.response);
      const errMsg = response.data.error;
      const msg = response.data.response;
      if (errMsg) {
        setError(msg);
        return;
      }
      if (error) {
        setError(null);
        setId(msg.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //
  }, []);
  return (
    <SuiBox p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Exam Type
              </SuiTypography>
            </SuiBox>
            <Select
              options={examArr}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Not Focused")}
              onChange={(value) => setExamType(value.value)}
            />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6} className="ml-auto relative">
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiBox mb={0.5}>
              <SuiTypography variant="body2" textColor="text" fontWeight="medium">
                Year
              </SuiTypography>
            </SuiBox>
            <Select
              options={yearArr}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Not Focused")}
              onChange={(value) => setYear(value.value)}
            />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiInput
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              placeholder="Enter subject name..."
            />
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6} className="ml-auto relative">
          <SuiBox display="flex" width="100%" flexDirection="column" height="100%">
            <SuiButton variant="gradient" buttonColor="info" fullWidth onClick={handleAddExam}>
              Add Exam
            </SuiButton>
          </SuiBox>
        </Grid>
        <SuiBox
          p={2}
          ml={1}
          display="flex"
          width="100%"
          justifyContent="center"
          flexDirection="column"
          height="100%"
        >
          {error && <Alert severity="error">{error}</Alert>}
          {id && <Alert severity="success">Exam Id : {id}</Alert>}
        </SuiBox>
      </Grid>
    </SuiBox>
  );
}

export default AddExam;
