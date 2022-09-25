import React, { useState, useEffect } from "react";
//-- Soft UI Dashboard React example components --//
import SoftInput from "components/SuiInput";
import SelectLabels from "components/SelectText/SelectLabels";
import SuiTypography from "components/SuiTypography";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import { Box } from "@mui/system";
//import Box from "@mui/material/Box";
//import SoftButton from "components/SuiButton";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
//import ImageUpload from "components/ImageUploading";
import ImageUploading from "react-images-uploading";
import SoftButton from "components/SuiButton";
import CancelIcon from "@material-ui/icons/Cancel";
import LevelApi from "../../api/Level";
import CourseApi from "../../api/Course";
import { useAuth } from "auth-context/auth.context";
import S3 from "react-aws-s3";
import Alert from "@mui/material/Alert";
import Loading from "../../components/Loading/index";

window.Buffer = window.Buffer || require("buffer").Buffer;

//--dummy data--//
// const level = [
//   "SS1",
//   "SS2",
//   "SS3",
//   "JSS1",
//   "JSS2",
//   "JSS3",
//   "Primary 1",
//   "Primary 2",
//   "Primary 3",
//   "Primary 4",
// ];

function addCourses() {
  const initialState = {
    title: "",
    id: "",
    description: "",
    images: [],
    userLevel: [],
  };

  const clearState = () => {
    setTitle(initialState.title);
    setId(initialState.id);
    setImages(initialState.images);
    setDescription(initialState.setDescription);
    setUserLevel(initialState.userLevel);
  };

  //-- state --//
  let { user } = useAuth();
  const [title, setTitle] = useState("");
  const [levels, setLevels] = useState([]);
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userLevel, setUserLevel] = useState([]);
  //--for sorting purpose--//
  const [levelResponse, setLevelResponse] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserLevel(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    var level_id = levelResponse.find((levels) => levels.name === value[0]);
    setId(level_id.id);
  };
  const maxNumber = 69;

  //--s3 config--//
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  };
  //--functions--//
  //--upload to s3--//
  const uploadImage = async (file) => {
    setLoading(true);
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, file.name)
      .then((data) => {
        let image_url = data.location;
        sendData(image_url);
      })
      .catch((err) => console.error(err));
  };
  const onChange = (imageList) => {
    setImages(imageList);
  };
  //--getLevels from api--//
  const fetchLevels = async () => {
    const token = user.token;
    try {
      let response = await LevelApi.GetLevels({ token });
      let levels = response.data.response;
      if (levels !== null) {
        setLevelResponse(levels);
        let levelName = levels.map((a) => a.name);
        setLevels(levelName);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendData = async (url) => {
    try {
      const token = user.token;
      const name = title;
      const level_id = id;
      const image = url;
      let response = await CourseApi.AddCourse({
        name,
        level_id,
        description,
        image,
        token,
      });
      setLoading(false);
      let error = response.data.error;
      if (error === false) {
        setUploadSuccessful(true);
        clearState();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let abortController = new AbortController();
    fetchLevels();
    return () => {
      abortController.abort();
    };
  }, []);

  const handleSubmit = async () => {
    const file = images[0].file;
    uploadImage(file);
  };

  const SubmitButton = () => {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 50,
          padding: 5,
          alignlevel_ids: "center",
          justifyContent: "center",
        }}
      >
        <SuiBox mb={2}>
          <SoftButton onClick={handleSubmit} variant="contained" buttonColor="primary">
            Submit
          </SoftButton>
        </SuiBox>
      </Box>
    );
  };

  return (
    <div>
      {uploadSuccessful && (
        <Alert severity="success">Course {title} has been successfully created!</Alert>
      )}
      {loading && <Loading />}
      {!loading && (
        <Grid container justify="center" spacing={2}>
          <Grid xl={7}>
            <SuiBox component="form" role="form">
              <SuiBox mb={2}>
                <SuiBox mb={1.5} ml={0.5}>
                  <SuiTypography component="label" variant="h6" fontWeight="bold">
                    Course Title
                  </SuiTypography>
                </SuiBox>
                <SuiBox mb={1} ml={0.5}>
                  <SoftInput
                    defaultValue={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                      setUploadSuccessful(false);
                    }}
                    placeholder="Enter the title..."
                    size="medium"
                  />
                  <SuiTypography component="label" variant="overline" color="info">
                    Please follow our course title guideline
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiBox mb={1.5} ml={0.5}>
                  <SelectLabels levels={levels} userLevel={userLevel} handleChange={handleChange} />
                </SuiBox>
                <SuiBox mb={1} ml={0.5}>
                  <SuiTypography component="label" variant="overline" color="info">
                    Select the level for this course
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
              <SuiBox mb={2}>
                <SuiBox mb={1.5} ml={0.5}>
                  <SuiTypography component="label" variant="h6" fontWeight="bold">
                    Description
                  </SuiTypography>
                </SuiBox>
                <SuiBox mb={1} ml={0.5}>
                  <SoftInput
                    defaultValue={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                    multiline
                    rows={5}
                    placeholder="Enter the description..."
                    size="medium"
                  />
                  <SuiTypography component="label" variant="overline" color="info">
                    Shortly describe this course.
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Grid>
          <Grid xl={5}>
            <SuiBox component="form" role="form">
              <SuiBox
                sx={{
                  width: 300,
                  marginTop: 5,
                  height: 300,
                }}
              >
                {images.length == 0 && (
                  <PlaceholderCard title={{ variant: "h5", text: "Cover Image" }} />
                )}
                <div className="Image">
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      //onImageRemoveAll,
                      //onImageUpdate,
                      onImageRemove,
                      //isDragging,
                      //dragProps,
                    }) => (
                      <div className="upload__image-wrapper">
                        {imageList.map((image, index) => (
                          <div key={index} className="image-level_id">
                            <img src={image.data_url} alt="" width="320" />
                            <div className="content" id="close_button">
                              <CancelIcon fontSize="large" onClick={() => onImageRemove(index)} />
                            </div>
                          </div>
                        ))}
                        {images.length == 0 && (
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              height: 50,
                              padding: 5,
                              alignlevel_ids: "center",
                              justifyContent: "center",
                            }}
                          >
                            <SuiBox mb={2}>
                              <SoftButton
                                onClick={onImageUpload}
                                variant="outlined"
                                buttonColor="primary"
                              >
                                Upload Image
                              </SoftButton>
                            </SuiBox>
                          </Box>
                        )}
                        {title !== "" &&
                          description !== "" &&
                          levels.length !== 0 &&
                          images.length !== 0 && <SubmitButton />}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default addCourses;
