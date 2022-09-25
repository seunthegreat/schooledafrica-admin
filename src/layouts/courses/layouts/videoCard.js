import React, { useState } from "react";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import SuiInput from "components/SuiInput";
//import PropTypes from "prop-types";
import { Card, CardContent, CardMedia } from "@mui/material";

const VideoCard = () => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/watch?v=qrIP_igi76U");
  return (
    <Card sx={{ width: "25%" }}>
      <CardMedia
        component="iframe"
        height="200"
        image="https://www.youtube.com/embed/watch?v=qrIP_igi76U"
        controls
      />
      <CardContent>
        <SuiBox mb={1.5} ml={0.5}>
          <SuiTypography component="label" variant="h6" fontWeight="bold">
            URL
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} ml={0.5}>
          <SuiInput
            defaultValue={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
        </SuiBox>
        <SuiBox mb={1} ml={0.5}>
          <SuiTypography component="label" variant="caption">
            Select modules content or enter a valid video Url to preview course
          </SuiTypography>
        </SuiBox>
      </CardContent>
    </Card>
  );
};

// VideoCard.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   length: PropTypes.number.isRequired,
//   VideoCard: PropTypes.array,
// };

export default VideoCard;
