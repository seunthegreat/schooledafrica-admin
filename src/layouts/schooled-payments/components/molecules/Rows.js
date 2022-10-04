import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";

function CreateRows({ email, packageName, amount, pay_by, status, date }, key) {
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
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {packageName}
      </SuiTypography>
    ),
    amount: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {amount}
      </SuiTypography>
    ),
    method: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {pay_by}
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
  package: "Nil",
  amount: "Nil",
  pay_by: "Nil",
  status: "Nil",
  date: "Nil",
};
CreateRows.propTypes = {
  email: PropTypes.string,
  package: PropTypes.string,
  amount: PropTypes.string,
  pay_by: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
};

export default CreateRows;
