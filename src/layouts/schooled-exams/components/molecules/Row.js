import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import { useAuth } from "auth-context/auth.context";
import ExamApi from "api/Exam";

function CreateRows({ id, name, year, exam_type }) {
  let { user } = useAuth();

  const deleteExam = async () => {
    const token = user.token;
    let examId = id;
    try {
      let response = await ExamApi.deleteExam({ examId, token });
      console.log(response.data.response);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };
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
    option: (
      <SuiTypography
        component="a"
        href="/questions"
        variant="caption"
        textColor="secondary"
        fontWeight="medium"
      >
        View
      </SuiTypography>
    ),
    action: (
      <SuiButton variant="gradient" buttonColor="info" onClick={deleteExam}>
        Delete
      </SuiButton>
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
