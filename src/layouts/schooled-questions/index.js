import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useState } from "react";
import RichTextEditor from "react-rte";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

import { TagsInput } from "react-tag-input-component";

import Select from "react-select";
import { makeStyles } from "@mui/styles";

import { toolbarConfig } from "./constant";

function Questions() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [answers, setAnswers] = useState([]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "banana", label: "Banana" },
  ];

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
      width: "80%",
    },
  });

  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
              value={answers}
              onChange={setAnswers}
              name="options"
              placeHolder="Enter Options"
            />
            <SuiBox display="flex" flexDirection="column" height="100%" className={classes.answers}>
              <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                Answer(s)
              </SuiTypography>
              <Select
                options={options}
                onFocus={() => setBoxHeight(350)}
                onBlur={() => setBoxHeight(null)}
              />
            </SuiBox>
            <SuiBox display="flex" flexDirection="row" width="100%" my={2.5}>
              <SuiBox width="100%">
                <SuiButton
                  fullWidth
                  variant="gradient"
                  buttonColor="info"
                  onClick={() => console.log("Works")}
                >
                  Add
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Questions;
