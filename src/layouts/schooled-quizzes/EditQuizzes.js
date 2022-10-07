import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useState, useEffect } from "react";
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

import { useAuth } from "auth-context/auth.context";
import CourseApi from "api/Course";
import ModulesApi from "api/Module";
import QuizApi from "api/Quiz";

import Select from "react-select";
import { makeStyles } from "@mui/styles";

import { toolbarConfig } from "./constant";

// const questions = [
//   {
//     question: "An angular 2 project written in typescript is* transpiled to javascript.",
//     ans_1: "Love me",
//     ans_2: "hate me",
//     ans_3: "want me too",
//     ans_4: "fuck off",
//     correct_answer: "A",
//   },
//   {
//     question: "Which of the following additional features are provided to the developer",
//     ans_1: "Love me",
//     ans_2: "hate me",
//     ans_3: "want me too",
//     ans_4: "fuck off",
//     correct_answer: "B",
//   },
//   {
//     question: "Luma is a beautifully crafted user interface for modern Education Platforms",
//     ans_1: "Love me",
//     ans_2: "hate me",
//     ans_3: "want me too",
//     ans_4: "fuck off",
//     correct_answer: "D",
//   },
//   {
//     question: "What is your name",
//     ans_1: "Amaka",
//     ans_2: "Williams",
//     ans_3: "Samuel",
//     ans_4: "David",
//     correct_answer: "C",
//   },
// ];

function EditQuizzes() {
  let { user } = useAuth();
  const token = user.token;
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [contents, setContents] = useState([]);
  const [contentId, setContentId] = useState(null);

  //--getCourses from api--//
  const fetchCourses = async () => {
    try {
      let response = await CourseApi.GetCourses({ token });
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
        //console.log(response.data.response);
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
        //console.log("contents", response.data.response);
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

  //--getQuiz from api--//
  const fetchQuizzes = async (quizId) => {
    let quiz_id = quizId;
    try {
      let response = await QuizApi.getQuiz({ quiz_id, token });
      let quizzes = response.data.response;
      if (quizzes !== null) {
        setQuestionArr(response.data.response);
        console.log(response.data.response);
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

  //Question--//
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [options, setOptions] = useState([]);
  const [optionArr, setOptionArr] = useState([]);
  const [answer, setAnswer] = useState(null);

  const [questionArr, setQuestionArr] = useState([]);
  const removeQuestion = async (index, id) => {
    setQuestionArr([...questionArr.slice(0, index), ...questionArr.slice(index + 1)]);
    try {
      await QuizApi.deleteQuestion({ id, token });
      //console.log(response);
    } catch (err) {
      console.log(err);
    }
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

  const handleSelectContent = (value) => {
    //console.log(value);
    setContentId(value.contentId);
    fetchQuizzes(value.contentId);
  };

  const handleAddQuiz = async () => {
    let body = {
      quiz_id: contentId,
      question: value.toString("html"),
      ans_1: optionArr.length !== 0 ? optionArr[0].value : null,
      ans_2: optionArr.length !== 0 ? optionArr[1].value : null,
      ans_3: optionArr.length !== 0 ? optionArr[2].value : null,
      ans_4: optionArr.length !== 0 ? optionArr[3].value : null,
      correct_answer: answer,
    };
    //console.log(body);
    addQuiz(body);

    try {
      await QuizApi.createQuestion({ body, token });
      //console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7}>
            <QuizQuery
              courses={courses}
              modules={modules}
              contents={contents}
              handleSelectCourse={handleSelectCourse}
              handleSelectModule={handleSelectModule}
              handleSelectContent={handleSelectContent}
            />
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
                  correct_answer={e.correct_answer}
                  index={index}
                  length={questionArr.length}
                  onPress={() => removeQuestion(index, e.id)}
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
