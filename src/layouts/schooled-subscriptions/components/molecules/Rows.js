import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";

function CreateRows({ email, subscription, duration, starts, ends, status }, key) {
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
    subscription: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {subscription}
      </SuiTypography>
    ),
    duration: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {duration}
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
  subscription: "Nil",
  duration: "Nil",
  starts: "Nil",
  ends: "Nil",
  status: "Nil",
};
CreateRows.propTypes = {
  email: PropTypes.string,
  subscription: PropTypes.string,
  duration: PropTypes.string,
  starts: PropTypes.string,
  ends: PropTypes.string,
  status: PropTypes.string,
};

export default CreateRows;
