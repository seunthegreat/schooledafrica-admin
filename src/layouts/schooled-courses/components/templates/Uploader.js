import PropTypes from "prop-types";

import { CardMedia } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import kal from "assets/images/kal-visuals-square.jpg";

const Uploader = () => {
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
  const classes = useStyles();
  return (
    <SuiBox
      my={2}
      //backgroundColor="red"
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <SuiBox display="flex" width="100%" flexDirection="row" height="100%">
            <SuiBox customClass={classes.courseCard_imageContainer}>
              <CardMedia
                sx={{ width: "100%" }}
                src={kal}
                component="img"
                className={classes.courseCard_image}
                //onClick={onPress}
              />
            </SuiBox>
            <SuiBox
              width="70%"
              backgroundColor="#F2FCEC"
              sx={{ padding: 2, borderRadius: 2, marginLeft: 2 }}
            >
              <SuiTypography variant="h6" my={2} gutterBottom>
                Image Guidelines for Course Module
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SuiBox
            display="flex"
            //justifyContent="center"
            width="100%"
            flexDirection="column"
            height="100%"
            //backgroundColor="red"
          >
            <SuiBox>
              <SuiTypography variant="caption" fontWeight="medium">
                Upload Using Link
              </SuiTypography>
            </SuiBox>
            <SuiBox
              mb={3}
              justifyContent="space-between"
              display="flex"
              flexDirection="row"
              //backgroundColor="red"
            >
              <SuiBox width="70%">
                <SuiInput
                  //value={title}
                  key={"body"}
                  placeholder={"e.g https://myschooledafricabucket/lawsOfIndices.jpg"}
                  //onChange={(e) => setTitle(e.target.value)}
                />
              </SuiBox>
              <SuiBox width="25%">
                <SuiButton fullWidth variant="gradient" buttonColor="info">
                  Upload
                </SuiButton>
              </SuiBox>
            </SuiBox>
            <SuiBox>
              <SuiTypography variant="caption" fontWeight="medium">
                Upload From Device
              </SuiTypography>
            </SuiBox>
            <SuiBox
              my={1}
              justifyContent="space-between"
              display="flex"
              flexDirection="row"
              //background
            >
              <SuiBox width="70%">
                <TextField
                  name="upload-photo"
                  style={{ width: "100%" }}
                  type="file"
                  //onChange={handleFile}
                />
              </SuiBox>
              <SuiBox width="25%">
                <SuiButton fullWidth variant="gradient" buttonColor="info">
                  Upload
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );
};

Uploader.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};

export default Uploader;
