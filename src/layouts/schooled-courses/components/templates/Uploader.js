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
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Uploader = ({ visible, onPress, title }) => {
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
      <SuiBox width="100%" flexDirection="row" display="flex">
        <SuiBox width="10%" ml={1}>
          <SuiBox display="flex" alignItem="center" flexDirection="row" my={1} width="100%">
            <SuiTypography variant="h6" gutterBottom>
              {title}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox width="80%">
          <Divider />
        </SuiBox>
        <SuiBox
          width="10%"
          display="flex"
          alignItem="center"
          justifyContent="right"
          //backgroundColor="red"
          flexDirection="row"
        >
          <Button
            onClick={onPress}
            sx={{
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
            }}
          >
            <SuiTypography variant="caption" textColor="text" mr={1} gutterBottom>
              {!visible ? "Show" : "Hide"}
            </SuiTypography>
            {!visible ? (
              <KeyboardArrowUpIcon sx={{ color: "#d3d3d3" }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ color: "#d3d3d3" }} />
            )}
          </Button>
        </SuiBox>
      </SuiBox>
      {visible && (
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
      )}
    </SuiBox>
  );
};

Uploader.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
};

export default Uploader;
