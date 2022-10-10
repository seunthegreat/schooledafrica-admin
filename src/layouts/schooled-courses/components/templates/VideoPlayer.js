import PropTypes from "prop-types";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import { Card } from "@mui/material";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSource, onChangeUrl }) => {
  return (
    <Card sx={{ width: "35%", height: "30%" }}>
      <SuiBox width="100%">
        <ReactPlayer width={"100%"} url={videoSource} />
        <SuiBox p={2}>
          <SuiTypography textColor="text" variant="h6" my={2} gutterBottom>
            URL
          </SuiTypography>
          <SuiBox>
            <SuiInput
              value={videoSource}
              key={"body"}
              placeholder={"Describe the level..."}
              onChange={onChangeUrl}
            />
          </SuiBox>
          <SuiTypography p={1} textColor="text" variant="caption" mb={2} gutterBottom>
            Enter a valid URL here
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

VideoPlayer.propTypes = {
  videoSource: PropTypes.string,
  onChangeUrl: PropTypes.func,
};

export default VideoPlayer;
