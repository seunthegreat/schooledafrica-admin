import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

const Courses = ({ name }) => {
  return (
    <SuiBox my={2} display="flex" flexDirection="row" width="100%">
      <SuiBox width="15%">
        <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
          {name}
        </SuiTypography>
      </SuiBox>
      <SuiBox width="85%">
        <Divider />
      </SuiBox>
    </SuiBox>
  );
};

Courses.propTypes = {
  name: PropTypes.string,
};

export default Courses;
