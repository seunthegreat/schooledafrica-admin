import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";

function CreateRows({ transaction, type, reference, email, amount, message, status, date }, key) {
  return {
    id: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {key + 1}
      </SuiTypography>
    ),
    transaction: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {transaction}
      </SuiTypography>
    ),
    type: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {type}
      </SuiTypography>
    ),
    reference: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {reference}
      </SuiTypography>
    ),
    email: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {email}
      </SuiTypography>
    ),
    amount: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {amount}
      </SuiTypography>
    ),
    message: (
      <SuiTypography variant="caption" textColor="text" fontWeight="medium">
        {message}
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
  transaction: "Nil",
  type: "Nil",
  reference: "Nil",
  email: "Nil",
  amount: "Nil",
  message: "Nil",
  status: "Nil",
  date: "Nil",
};
CreateRows.propTypes = {
  transaction: PropTypes.string,
  type: PropTypes.string,
  reference: PropTypes.string,
  email: PropTypes.string,
  amount: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
};

export default CreateRows;
