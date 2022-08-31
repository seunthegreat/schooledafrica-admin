//-- react-router-dom components--//
//import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

//-- @mui material components --//
import Card from "@mui/material/Card";

//-- Soft UI Dashboard React components --//
//import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import SoftButton from "components/SuiButton";

// Custom styles for the ActionCard
import styles from "components/ActionCard/styles";

function ActionCard() {
  const classes = styles();

  return (
    <Card className={classes.ActionCard}>
      <SuiBox display="flex" alignItems="center" justifyContent="center">
        <SoftButton variant="outlined" buttonColor="primary">
          Save Changes
        </SoftButton>
      </SuiBox>
    </Card>
  );
}

//-- Setting default values for the props of ActionCard --//
ActionCard.defaultProps = {
  authors: [],
};

// Typechecking props for the ActionCard
ActionCard.propTypes = {
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

export default ActionCard;
