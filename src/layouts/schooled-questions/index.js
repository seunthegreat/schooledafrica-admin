import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useState } from "react";
import RichTextEditor from "react-rte";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import { TagsInput } from "react-tag-input-component";

import { toolbarConfig } from "./constant";

function Questions() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [answers, setAnswers] = useState([]);

  const onChange = (value) => {
    setValue(value);
    // console.log(value.toString("html"));
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SuiBox p={2}>
          <SuiBox display="flex" flexDirection="column" height="100%">
            <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
              Question
            </SuiTypography>
          </SuiBox>
          <RichTextEditor value={value} onChange={onChange} toolbarConfig={toolbarConfig} />
          <SuiTypography variant="caption" my={2} gutterBottom>
            Shortly describe the question.
          </SuiTypography>
          <TagsInput
            value={answers}
            onChange={setAnswers}
            name="fruits"
            placeHolder="enter fruits"
          />
        </SuiBox>
      </Card>
    </DashboardLayout>
  );
}

export default Questions;
