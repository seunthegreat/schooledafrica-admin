import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";

function CreateRows({ id, name, year, exam_type }) {
  return {
    exam_id: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {id}
      </SuiTypography>
    ),
    exam: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {id}
      </SuiTypography>
    ),
    name: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {name}
      </SuiTypography>
    ),
    year: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {year}
      </SuiTypography>
    ),
    type: (
      <SuiTypography variant="button" textColor="text" fontWeight="medium">
        {exam_type}
      </SuiTypography>
    ),
  };
}

CreateRows.defaultProps = {
  id: "Nil",
  exam: "Nil",
  name: "Nil",
  year: "Nil",
  type: "Nil",
};
CreateRows.propTypes = {
  id: PropTypes.string,
  exam: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  type: PropTypes.string,
};

export default CreateRows;
