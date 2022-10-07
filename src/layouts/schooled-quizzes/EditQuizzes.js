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
import QuestionCard from "./components/atoms/QuestionCard";

import Select from "react-select";
import { makeStyles } from "@mui/styles";

import { toolbarConfig } from "./constant";

const questions = [
  {
    question: "An angular 2 project written in typescript is* transpiled to javascript.",
    ans_1: "Love me",
    ans_2: "hate me",
    ans_3: "want me too",
    ans_4: "fuck off",
    correct_ans: "A",
  },
  {
    question: "Which of the following additional features are provided to the developer",
    ans_1: "Love me",
    ans_2: "hate me",
    ans_3: "want me too",
    ans_4: "fuck off",
    correct_ans: "B",
  },
  {
    question: "Luma is a beautifully crafted user interface for modern Education Platforms",
    ans_1: "Love me",
    ans_2: "hate me",
    ans_3: "want me too",
    ans_4: "fuck off",
    correct_ans: "D",
  },
  {
    question: "What is your name",
    ans_1: "Amaka",
    ans_2: "Williams",
    ans_3: "Samuel",
    ans_4: "David",
    correct_ans: "C",
  },
];

function EditQuizzes() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [options, setOptions] = useState([]);
  const [optionArr, setOptionArr] = useState([]);
  const [answer, setAnswer] = useState(null);
  //const [answers, setAnswers] = useState([]);

  const [questionArr, setQuestionArr] = useState(questions);
  const removeQuestion = (index) => {
    setQuestionArr([...questionArr.slice(0, index), ...questionArr.slice(index + 1)]);
  };

  const addQuiz = (obj) => {
    setQuestionArr((current) => [...current, obj]);
  };

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
    //console.log("Options", optionArr);
    setOptionArr(optionArr);
  };

  const handleSelectAnswer = (value) => {
    setBoxHeight(null);
    let correctAnswer = value.value;

    if (optionArr[0].value === correctAnswer) {
      return setAnswer("A");
    }

    if (optionArr[1].value === correctAnswer) {
      return setAnswer("B");
    }

    if (optionArr[2].value === correctAnswer) {
      return setAnswer("C");
    }

    if (optionArr[3].value === correctAnswer) {
      return setAnswer("D");
    }
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
    addQuiz(body);
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
      <SuiBox my={4} alignContent="center" display="flex" justifyContent="center">
        <Grid container spacing={3}>
          {questionArr.map((e, index) => {
            return (
              <Grid item xs={12} lg={4} key={index}>
                <QuestionCard
                  question={e.question}
                  ans_1={e.ans_1}
                  ans_2={e.ans_2}
                  ans_3={e.ans_3}
                  ans_4={e.ans_3}
                  correct_ans={e.correct_ans}
                  index={index}
                  length={questionArr.length}
                  onPress={() => removeQuestion(index)}
                />
              </Grid>
            );
          })}
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
