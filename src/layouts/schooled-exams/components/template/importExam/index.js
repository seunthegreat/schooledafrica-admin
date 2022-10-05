import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the BuildByDevelopers
//import styles from "layouts/dashboard/components/BuildByDevelopers/styles";
import { TextField } from "@mui/material";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  //const classes = styles();

  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiTypography variant="h5" fontWeight="bold" mt={2} gutterBottom>
                Import Exams
              </SuiTypography>
              <SuiBox height="100%" alignItems="center" display="flex">
                <TextField name="upload-photo" type="file" />
              </SuiBox>
              <SuiBox display="flex" flexDirection="row" width="100%">
                <SuiBox width="60%">
                  <SuiButton fullWidth variant="gradient" buttonColor="info">
                    Upload
                  </SuiButton>
                </SuiBox>
                <SuiBox display="flex" alignItems="center" width="40%" ml={2}>
                  <SuiButton variant="outlined" buttonColor="info" size="small">
                    Cancel
                  </SuiButton>
                </SuiBox>
              </SuiBox>
            </SuiBox>
          </Grid>
          <Grid item xs={12} lg={5} className="ml-auto relative">
            <SuiBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              backgroundColor="info"
              borderRadius="lg"
              backgroundGradient
            >
              <SuiBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SuiBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default BuildByDevelopers;
