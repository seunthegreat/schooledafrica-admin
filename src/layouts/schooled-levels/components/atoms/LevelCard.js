import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const LevelCard = ({ name, description, onPress }) => {
  return (
    <Card>
      <SuiBox p={2} height="100%">
        <SuiBox display="flex" flexDirection="column" height="100%">
          <SuiBox display="flex" flexDirection="row" height="100%">
            <SuiBox width="90%">
              <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                {name}
              </SuiTypography>
            </SuiBox>
            <Button onClick={onPress}>
              <SuiBox display="flex" width="10%" justifyContent="center" alignItems="center">
                <DeleteIcon sx={{ color: "#FF6A74" }} />
              </SuiBox>
            </Button>
          </SuiBox>
          <SuiBox>
            <SuiTypography variant="caption" my={2} gutterBottom>
              {description}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

LevelCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default LevelCard;
