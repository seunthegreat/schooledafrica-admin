import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import EditIcon from "@mui/icons-material/Edit";
import styles from "../../styles";

const CourseCard = ({ title, image, onPress }) => {
  const classes = styles();
  return (
    <Card className={classes.courseCard}>
      <SuiBox customClass={classes.courseCard_imageContainer}>
        <CardMedia
          sx={{ width: "100%" }}
          src={image}
          component="img"
          className={classes.courseCard_image}
        />
        <SuiBox px={2} mb={0.5} display="flex" flexDirection="row" height="100%">
          <SuiBox width="80%">
            <SuiTypography variant="h6" fontWeight="bold" mt={1.5} gutterBottom>
              {title}
            </SuiTypography>
          </SuiBox>
          <SuiBox display="flex" width="20%" justifyContent="center" alignItems="center">
            <EditIcon sx={{ color: "#D3D3D3" }} onPress={onPress} />
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
};

export default CourseCard;
