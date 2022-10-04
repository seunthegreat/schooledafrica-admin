import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";

function CreateRows({ email, packageName, starts, ends, status }, key) {
  return {
    id: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {key + 1}
      </SuiTypography>
    ),
    email: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {email}
      </SuiTypography>
    ),
    package: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {packageName}
      </SuiTypography>
    ),
    starts: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {starts}
      </SuiTypography>
    ),
    ends: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {ends}
      </SuiTypography>
    ),
    status: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {status}
      </SuiTypography>
    ),
  };
}

CreateRows.defaultProps = {
  email: "Nil",
  package: "Nil",
  starts: "Nil",
  ends: "Nil",
  status: "Nil",
};
CreateRows.propTypes = {
  email: PropTypes.string,
  package: PropTypes.string,
  starts: PropTypes.string,
  ends: PropTypes.string,
  status: PropTypes.string,
};

export default CreateRows;
