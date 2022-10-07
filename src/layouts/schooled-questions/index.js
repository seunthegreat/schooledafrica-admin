import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useState } from "react";

import SuiBox from "components/SuiBox";
import { Grid } from "@mui/material";
import QuestionCard from "./components/atoms/QuestionCard";

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
];

function Questions() {
  const [questionArr, setQuestionArr] = useState(questions);

  const removeQuestion = (index) => {
    setQuestionArr([...questionArr.slice(0, index), ...questionArr.slice(index + 1)]);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox alignContent="center" display="flex" justifyContent="center">
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
    </DashboardLayout>
  );
}

export default Questions;
