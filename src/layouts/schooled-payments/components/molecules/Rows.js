import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";

function CreateRows({ email, subscription, amount, method, status, date }, key) {
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
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {subscription}
      </SuiTypography>
    ),
    amount: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {amount}
      </SuiTypography>
    ),
    method: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {method}
      </SuiTypography>
    ),
    status: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {status}
      </SuiTypography>
    ),
    date: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {date}
      </SuiTypography>
    ),
  };
}

CreateRows.defaultProps = {
  email: "Nil",
  subscription: "Nil",
  amount: "Nil",
  method: "Nil",
  status: "Nil",
  date: "Nil",
};
CreateRows.propTypes = {
  email: PropTypes.string,
  subscription: PropTypes.string,
  amount: PropTypes.string,
  method: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
};

export default CreateRows;
