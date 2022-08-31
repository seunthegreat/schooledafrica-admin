//-- react-router-dom components--//
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the CourseCard
import styles from "components/CourseCard/styles";

function CourseCard({ image, label, title, description, action }) {
  const classes = styles();

  return (
    <Card className={classes.courseCard}>
      <SuiBox customClass={classes.courseCard_imageContainer}>
        <CardMedia src={image} component="img" title={title} className={classes.courseCard_image} />
      </SuiBox>
      <SuiBox pt={3} px={0.5}>
        <SuiBox mb={1}>
          <SuiTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            textGradient
          >
            {label}
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1}>
          {action.type === "internal" ? (
            <SuiTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </SuiTypography>
          ) : (
            <SuiTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </SuiTypography>
          )}
        </SuiBox>
        <SuiBox mb={3} lineHeight={0}>
          <SuiTypography variant="button" fontWeight="regular" textColor="text">
            {description}
          </SuiTypography>
        </SuiBox>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <SuiButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              buttonColor={action.color}
            >
              {action.label}
            </SuiButton>
          ) : (
            <SuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              buttonColor={action.color}
            >
              {action.label}
            </SuiButton>
          )}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of CourseCard
CourseCard.defaultProps = {
  authors: [],
};

// Typechecking props for the CourseCard
CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default CourseCard;
