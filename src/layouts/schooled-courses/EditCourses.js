import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RichTextEditor from "react-rte";
import { toolbarConfig } from "config/constant";
import Divider from "@mui/material/Divider";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import { makeStyles } from "@mui/styles";
//import kal from "assets/images/kal-visuals-square.jpg";
import Uploader from "./components/templates/Uploader";

//import SuiButton from "components/SuiButton";

function EditCourses() {
  const location = useLocation();
  const [title, setTitle] = useState("Hello");
  const [description, setDescription] = useState(null);
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const useStyles = makeStyles({
    titleContainer: {
      backgroundColor: "#F2FCEC",
      borderRadius: 10,
    },
    container: {
      height: "100%",
      width: "100%",
    },
    courseCard_imageContainer: {
      boxShadow: 2,
      width: "30%",
      borderRadius: 2,
      position: "relative",
    },

    courseCard_image: {
      maxWidth: "100%",
      margin: 0,
      boxShadow: 1,
      objectFit: "cover",
      objectPosition: "center",
    },
  });

  const onChange = (value) => {
    setValue(value);
    console.log(value.toString("html"));
  };

  useEffect(() => {
    console.log(location.state);
    let title = location.state.title;
    let description = location.state.description;
    // let parsedDescription = stringToHTML(description);
    // console.log(parsedDescription);

    setTitle(title);
    setDescription(description);
  }, []);
  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox alignContent="center" display="flex" justifyContent="center">
        <Card className={classes.container}>
          <SuiBox p={2} height="100%">
            <SuiBox width="100%">
              <Divider />
            </SuiBox>
            <Uploader />
            <SuiBox width="100%">
              <Divider />
            </SuiBox>
            <Uploader />
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiTypography variant="h6" my={2} gutterBottom>
                Title
              </SuiTypography>
              <SuiBox width="100%" backgroundColor="#F2FCEC" p={2} mb={1} sx={{ borderRadius: 2 }}>
                <SuiTypography
                  variant="body2"
                  textColor="text"
                  fontWeight="bold"
                  my={2}
                  gutterBottom
                >
                  {title}
                </SuiTypography>
              </SuiBox>
              <SuiBox pb={1}>
                <SuiInput
                  value={title}
                  key={"body"}
                  placeholder={"Describe the level..."}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </SuiBox>
            </SuiBox>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiTypography variant="h6" my={2} gutterBottom>
                Description
              </SuiTypography>
            </SuiBox>
            <SuiBox width="100%" backgroundColor="#F2FCEC" p={2} mb={1} sx={{ borderRadius: 2 }}>
              <SuiTypography variant="body2" textColor="text" fontWeight="bold" my={2} gutterBottom>
                {description}
              </SuiTypography>
            </SuiBox>
            <RichTextEditor value={value} onChange={onChange} toolbarConfig={toolbarConfig} />
            <SuiTypography variant="caption" my={2} gutterBottom>
              Shortly describe the course.
            </SuiTypography>
            <SuiBox my={4} width="100%">
              <SuiButton fullWidth variant="gradient" buttonColor="info">
                UPDATE
              </SuiButton>
            </SuiBox>
            <SuiBox width="100%">
              <Divider />
            </SuiBox>
            <Uploader />
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default EditCourses;
