import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useState } from "react";
import RichTextEditor from "react-rte";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import { TagsInput } from "react-tag-input-component";

import { Grid } from "@mui/material";
import QuizQuery from "./components/templates/QuizQuery";
import WorkWithQuiz from "./components/templates/WorkWithQuiz";

import Select from "react-select";
import { makeStyles } from "@mui/styles";

import { toolbarConfig } from "./constant";

function EditQuizzes() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [options, setOptions] = useState([]);
  const [optionArr, setOptionArr] = useState([]);
  const [answer, setAnswer] = useState(null);
  //const [answers, setAnswers] = useState([]);

  const onChange = (value) => {
    setValue(value);
    // console.log(value.toString("html"));
  };

  const [boxHeight, setBoxHeight] = useState(null);

  const useStyles = makeStyles({
    answers: {
      height: boxHeight,
    },
    container: {
      height: "100%",
      width: "100%",
    },
  });

  const handleOptions = () => {
    let optionArr = [];
    for (let i = 0; i < options.length; i++) {
      let option = {};
      let label = options[i].trim();
      option["value"] = label;
      option["label"] = label.charAt(0).toUpperCase() + label.slice(1);
      optionArr.push(option);
    }
    console.log("Options", optionArr);
    setOptionArr(optionArr);
  };

  const handleSelectAnswer = (value) => {
    setBoxHeight(null);
    setAnswer(value.value);
  };

  const handleAddQuiz = () => {
    let body = {
      question: value.toString("html"),
      ans_1: optionArr.length !== 0 ? optionArr[0].value : null,
      ans_2: optionArr.length !== 0 ? optionArr[1].value : null,
      ans_3: optionArr.length !== 0 ? optionArr[2].value : null,
      ans_4: optionArr.length !== 0 ? optionArr[3].value : null,
      correct_ans: answer,
    };
    console.log(body);
  };

  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7}>
            <QuizQuery />
          </Grid>
          <Grid item xs={12} lg={5}>
            <WorkWithQuiz />
          </Grid>
        </Grid>
      </SuiBox>
      <SuiBox alignContent="center" display="flex" justifyContent="center">
        <Card className={classes.container}>
          <SuiBox p={2} height="100%">
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                Question
              </SuiTypography>
            </SuiBox>
            <RichTextEditor value={value} onChange={onChange} toolbarConfig={toolbarConfig} />
            <SuiTypography variant="caption" my={2} gutterBottom>
              Shortly describe the question.
            </SuiTypography>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                Options
              </SuiTypography>
            </SuiBox>
            <TagsInput
              value={options}
              onChange={setOptions}
              onBlur={handleOptions}
              name="options"
              placeHolder="Enter Options"
            />
            <SuiBox display="flex" flexDirection="column" height="100%" className={classes.answers}>
              <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                Answer
              </SuiTypography>
              <Select
                options={optionArr}
                onFocus={() => setBoxHeight(350)}
                onBlur={() => setBoxHeight(null)}
                onChange={(value) => handleSelectAnswer(value)}
              />
            </SuiBox>
            <SuiBox display="flex" flexDirection="row" width="100%" my={2.5}>
              <SuiBox width="100%">
                <SuiButton fullWidth variant="gradient" buttonColor="info" onClick={handleAddQuiz}>
                  Add Quiz
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default EditQuizzes;
