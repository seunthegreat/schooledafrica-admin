import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

function Level({ level, description, onDelete, onEdit }) {
  return (
    <SuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      backgroundColor="grey-100"
      borderRadius="lg"
      p={3}
      mt={2}
    >
      <SuiBox width="100%" display="flex" flexDirection="column">
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <SuiTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {level}
          </SuiTypography>

          <SuiBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <SuiBox mr={1}>
              <SuiButton onClick={onDelete} variant="text" buttonColor="error">
                <Icon className="material-icons-round">delete</Icon>&nbsp;delete
              </SuiButton>
            </SuiBox>
            <SuiButton onClick={onEdit} variant="text" buttonColor="dark">
              <Icon className="material-icons-round">edit</Icon>&nbsp;edit
            </SuiButton>
          </SuiBox>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Description
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} sx={{ width: "85%" }} lineHeight={0}>
          <SuiTypography variant="caption" fontWeight="medium">
            {description}
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
}

// Typechecking props for the Level
Level.propTypes = {
  level: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Level;
