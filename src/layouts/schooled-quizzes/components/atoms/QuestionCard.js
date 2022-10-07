import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DeleteIcon from "@mui/icons-material/Delete";
import parse from "html-react-parser";

const QuestionCard = ({
  question,
  ans_1,
  ans_2,
  ans_3,
  ans_4,
  ans_5,
  correct_answer,
  index,
  length,
  onPress,
}) => {
  const Question = parse(question);
  return (
    <Card>
      <SuiBox p={2} height="100%">
        <SuiBox display="flex" flexDirection="column" height="100%">
          <SuiBox display="flex" flexDirection="row" height="100%">
            <SuiBox width="90%">
              <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                Question {index + 1} of {length}
              </SuiTypography>
            </SuiBox>
            <SuiBox display="flex" width="10%" justifyContent="center" alignItems="center">
              <DeleteIcon sx={{ color: "#FF6A74" }} onClick={onPress} />
            </SuiBox>
          </SuiBox>
          <SuiBox>
            <SuiTypography variant="caption" my={2} gutterBottom>
              {Question}
            </SuiTypography>
          </SuiBox>
          <SuiBox backgroundColor={correct_answer === "A" ? "#F2FCEC" : null} px={2} mt={1}>
            <SuiTypography variant="caption" my={2} gutterBottom>
              A. {ans_1}
            </SuiTypography>
          </SuiBox>
          <SuiBox backgroundColor={correct_answer === "B" ? "#F2FCEC" : null} px={2}>
            <SuiTypography variant="caption" my={2} gutterBottom>
              B. {ans_2}
            </SuiTypography>
          </SuiBox>
          <SuiBox backgroundColor={correct_answer === "C" ? "#F2FCEC" : null} px={2}>
            <SuiTypography variant="caption" my={2} gutterBottom>
              C. {ans_3}
            </SuiTypography>
          </SuiBox>
          <SuiBox backgroundColor={correct_answer === "D" ? "#F2FCEC" : null} px={2}>
            <SuiTypography variant="caption" my={2} gutterBottom>
              D. {ans_4}
            </SuiTypography>
          </SuiBox>
          {ans_5 && (
            <SuiBox backgroundColor={correct_answer === "E" ? "#F2FCEC" : null} px={2}>
              <SuiTypography variant="caption" my={2} gutterBottom>
                E. {ans_5}
              </SuiTypography>
            </SuiBox>
          )}
        </SuiBox>
      </SuiBox>
    </Card>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.string,
  ans_1: PropTypes.string,
  ans_2: PropTypes.string,
  ans_3: PropTypes.string,
  ans_4: PropTypes.string,
  ans_5: PropTypes.string,
  correct_answer: PropTypes.string,
  index: PropTypes.number,
  length: PropTypes.number,
  onPress: PropTypes.func,
};

export default QuestionCard;
