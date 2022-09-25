import React, { useState } from "react";
import SuiInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";
import SuiBox from "components/SuiBox";

const BasicInformation = ({ courseTitle, courseDescription }) => {
  //--Basic Info input state--//
  const [title, setTitle] = useState(courseTitle);
  const [description, setDescription] = useState(courseDescription);
  return (
    <SuiBox component="form" role="form" sx={{ width: "100%" }}>
      <SuiBox mb={1} ml={0.5}>
        <SuiTypography component="label" variant="h6">
          Basic Information
        </SuiTypography>
      </SuiBox>
      <SuiBox mb={2}>
        <SuiBox mb={1} ml={0.5}>
          <SuiTypography component="label" variant="caption" fontWeight="bold">
            Course Title
          </SuiTypography>
        </SuiBox>
        <SuiInput
          defaultValue={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <SuiBox mb={1} ml={0.5}>
          <SuiTypography component="label" variant="caption">
            Please see our course title guideline
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox mb={2}>
        <SuiBox mb={1} ml={0.5}>
          <SuiTypography component="label" variant="caption" fontWeight="bold">
            Description
          </SuiTypography>
        </SuiBox>
        <SuiInput
          defaultValue={description}
          multiline
          rows={5}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <SuiBox mb={1} ml={0.5}>
          <SuiTypography component="label" variant="caption">
            Shortly describe this course
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
};

BasicInformation.propTypes = {
  courseTitle: PropTypes.string.isRequired,
  courseDescription: PropTypes.string.isRequired,
};

export default BasicInformation;
