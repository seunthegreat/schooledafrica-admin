import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RichTextEditor from "react-rte";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import { toolbarConfig } from "config/constant";
import { makeStyles } from "@mui/styles";
//import kal from "assets/images/kal-visuals-square.jpg";
import Uploader from "./components/templates/Uploader";
import BasicInfo from "./components/templates/BasicInfo";
import VideoPlayer from "./components/templates/VideoPlayer";

import parse from "html-react-parser"; //--> Html parser

//--Apis--//
import { useAuth } from "auth-context/auth.context";
import ModulesApi from "api/Module";
import CourseApi from "api/Course";

import Select from "react-select";

//import SuiButton from "components/SuiButton";

// const contentArr = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

function EditCourses() {
  let { user } = useAuth();
  const token = user.token;
  const location = useLocation(); //-->route data

  //--States--//

  const initialState = {
    default: null,
  };

  const clearState = () => {
    setModuleId(initialState.default);
    setTitle(initialState.default);
    setDescription(initialState.default);
    setModuleName(initialState.default);
    setValue(initialState.default);
    setName(initialState.default);
    setContentName(initialState.default);
    setTranscript(initialState.default);
    setTranscriptValue(initialState.default);
    setIconIsVisible(initialState.default);
    setImageIsVisible(false);
    setBasicInfoIsVisible(false);
  };

  //--ids--//
  const [courseId, setCourseId] = useState("");
  const [moduleId, setModuleId] = useState("");

  //--Images--//
  const [iconUrl, setIconUrl] = useState("");
  const [courseImageUrl, setCourseImageUrl] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const [contents, setContents] = useState("");

  //--Module Content state--//
  const [name, setName] = useState("");
  const [contentName, setContentName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [transcriptValue, setTranscriptValue] = useState(RichTextEditor.createEmptyValue());

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
    //console.log(value.toString("html"));
  };

  const onChangeTranscriptValue = (value) => {
    setTranscriptValue(value);
    //console.log(value.toString("html"));
  };

  const showIconContent = () => {
    setIconIsVisible(!iconIsVisible);
  };

  const showImageContent = () => {
    setImageIsVisible(!imageIsVisible);
  };

  const showBasicInfo = () => {
    setBasicInfoIsVisible(!basicInfoIsVisible);
  };

  const handleSelectContents = (value) => {
    let contentName = value.value;
    let transcript = parse(value.transcript);
    setName(contentName);
    setTranscript(transcript);
    console.log(value);
    //setContents(value);
  };

  const handleContentList = (options) => {
    let optionArr = [];
    for (let i = 0; i < options.length; i++) {
      let option = {};
      let label = options[i].name.trim();
      option["value"] = label;
      option["label"] = label.charAt(0).toUpperCase() + label.slice(1);
      option["contentId"] = options[i].id;
      option["url"] = options[i].video;
      option["thumbnail"] = options[i].thumbnail;
      option["transcript"] = options[i].transcript;
      optionArr.push(option);
    }
    console.log("Contents :", optionArr);
    setContents(optionArr);
  };

  //--Server functions--//

  const handleUploadIcon = async () => {
    let body = {
      url: iconUrl,
    };

    try {
      const response = await CourseApi.updateCourseIcon({ courseId, body, token });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUploadCourseImage = async () => {
    let body = {
      url: courseImageUrl,
    };

    //console.log(body);
    try {
      const response = await CourseApi.updateCourseImage({ courseId, body, token });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateContent = async () => {
    let body = {
      name: contentName,
      transcript: transcriptValue.toString("html"),
    };
    console.log(body);
    let module_id = 10;
    try {
      const response = await ModulesApi.updateModuleContent({ module_id, body, token });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateModule = async () => {
    let body = {
      name: moduleName,
      description: value.toString("html"),
    };
    //console.log(id, body);
    let module_id = moduleId;

    if (value.toString("html") === "<p><br></p>") {
      return console.log("Description cannot be empty");
    }
    try {
      const response = await ModulesApi.updateModule({ module_id, body, token });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(location.state);

    if (location.state === null) {
      setTitle(null);
      setDescription(null);
      setModuleId(null);
      setContents([]);
      return;
    }

    let title = location.state.title;
    let description = location.state.description;
    let contents = location.state.contents;
    let moduleId = location.state.moduleId;
    let courseId = location.state.courseId;

    setTitle(title);
    setDescription(description);
    setModuleId(moduleId);
    setCourseId(courseId);

    handleContentList(contents);

    return () => {
      clearState();
    };
  }, []);
  const classes = useStyles();
  //const video = "https://www.youtube.com/watch?v=xKQvJgpD8aM";

  const [videoSource, setVideoSource] = useState("https://www.youtube.com/watch?v=xKQvJgpD8aM");
  const onChangeUrl = (value) => {
    setVideoSource(value);
    console.log(value);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox
        my={2}
        alignContent="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Card className={classes.container}>
          <SuiBox p={2} height="100%">
            <Uploader
              onPress={showIconContent}
              visible={iconIsVisible}
              title={"ICON"}
              url={iconUrl}
              onChangeUrl={(e) => setIconUrl(e.target.value)}
              onUploadUrl={handleUploadIcon}
            />
            <Uploader
              onPress={showImageContent}
              visible={imageIsVisible}
              title={"IMAGE"}
              url={courseImageUrl}
              onChangeUrl={(e) => setCourseImageUrl(e.target.value)}
              onUploadUrl={handleUploadCourseImage}
            />
          </SuiBox>
        </Card>
        <SuiBox my={1} />
        <Card className={classes.container}>
          <SuiBox p={2} height="100%">
            <BasicInfo
              headerTitle={"MODULE"}
              visible={basicInfoIsVisible}
              onToggleInfo={showBasicInfo}
              title={title}
              moduleName={moduleName}
              onChangeTitle={(e) => setModuleName(e.target.value)}
              description={description}
              editorValue={value}
              onChangeEditor={onChange}
              onUpdate={handleUpdateModule}
            />
          </SuiBox>
        </Card>
      </SuiBox>
      <SuiBox
        //my={2}
        alignContent="center"
        display="flex"
        //flexDirection="column"
        justifyContent="space-between"
        width="100%"
      >
        <Card sx={{ width: "62%" }}>
          <SuiBox p={2} height="100%">
            <Select options={contents} onChange={handleSelectContents} />
            <SuiBox width="100%" p={1}>
              <SuiBox display="flex" flexDirection="column" height="100%">
                <SuiTypography textColor="text" variant="h6" my={2} gutterBottom>
                  Content Name
                </SuiTypography>
                <SuiBox
                  width="100%"
                  backgroundColor="#F2FCEC"
                  p={2}
                  mb={1}
                  sx={{ borderRadius: 2 }}
                >
                  <SuiTypography
                    variant="body2"
                    textColor="text"
                    fontWeight="bold"
                    my={2}
                    gutterBottom
                    //background
                  >
                    {name}
                  </SuiTypography>
                </SuiBox>
                <SuiBox pb={1}>
                  <SuiInput
                    value={contentName}
                    key={"body"}
                    placeholder={"Describe the level..."}
                    onChange={(e) => setContentName(e.target.value)}
                  />
                </SuiBox>
              </SuiBox>
              <SuiBox display="flex" flexDirection="column" height="100%">
                <SuiTypography textColor="text" variant="h6" my={2} gutterBottom>
                  Transcript
                </SuiTypography>
              </SuiBox>
              <SuiBox width="100%" backgroundColor="#F2FCEC" p={2} mb={1} sx={{ borderRadius: 2 }}>
                <SuiTypography
                  variant="body2"
                  textColor="text"
                  fontWeight="bold"
                  m={2}
                  gutterBottom
                >
                  {transcript}
                </SuiTypography>
              </SuiBox>
              <RichTextEditor
                value={transcriptValue}
                onChange={onChangeTranscriptValue}
                toolbarConfig={toolbarConfig}
              />
              <SuiTypography textColor="text" variant="caption" my={2} gutterBottom>
                Add content transcript
              </SuiTypography>
              <SuiBox my={4} width="100%">
                <SuiButton
                  fullWidth
                  variant="gradient"
                  buttonColor="info"
                  onClick={handleUpdateContent}
                >
                  UPDATE
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Card>
        <SuiBox my={1} />
        <VideoPlayer videoSource={videoSource} onChangeUrl={onChangeUrl} />
      </SuiBox>
    </DashboardLayout>
  );
}

export default EditCourses;
