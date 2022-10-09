import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RichTextEditor from "react-rte";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";
// import SuiInput from "components/SuiInput";
import { makeStyles } from "@mui/styles";
//import kal from "assets/images/kal-visuals-square.jpg";
import Uploader from "./components/templates/Uploader";
import BasicInfo from "./components/templates/BasicInfo";

//import SuiButton from "components/SuiButton";

function EditCourses() {
  const location = useLocation();
  const [title, setTitle] = useState("Hello");
  const [description, setDescription] = useState(null);
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  //--View visibility--//
  const [iconIsVisible, setIconIsVisible] = useState(false);
  const [imageIsVisible, setImageIsVisible] = useState(false);
  const [basicInfoIsVisible, setBasicInfoIsVisible] = useState(false);

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

  const showIconContent = () => {
    setIconIsVisible(!iconIsVisible);
    console.log(iconIsVisible);
  };

  const showImageContent = () => {
    setImageIsVisible(!imageIsVisible);
  };

  const showBasicInfo = () => {
    setBasicInfoIsVisible(!basicInfoIsVisible);
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
      <SuiBox my={2} alignContent="center" display="flex" justifyContent="center">
        <Card className={classes.container}>
          <SuiBox p={2} height="100%">
            <Uploader onPress={showIconContent} visible={iconIsVisible} title={"ICON"} />
            <Uploader onPress={showImageContent} visible={imageIsVisible} title={"IMAGE"} />
            <BasicInfo
              headerTitle={"BASIC INFO"}
              visible={basicInfoIsVisible}
              onToggleInfo={showBasicInfo}
              title={title}
              onChangeTitle={(e) => setTitle(e.target.value)}
              description={description}
              editorValue={value}
              onChangeEditor={onChange}
            />
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default EditCourses;
