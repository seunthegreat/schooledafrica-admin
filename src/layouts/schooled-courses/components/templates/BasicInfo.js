import PropTypes from "prop-types";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import RichTextEditor from "react-rte";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { toolbarConfig } from "config/constant";

const BasicInfo = ({
  headerTitle,
  onToggleInfo,
  visible,
  title,
  onChangeTitle,
  description,
  editorValue,
  onChangeEditor,
  onUpdate,
  moduleName,
}) => {
  return (
    <SuiBox display="flex" flexDirection="column" height="100%">
      <SuiBox width="100%" flexDirection="row" display="flex">
        <SuiBox width="10%" ml={1}>
          <SuiBox display="flex" alignItem="center" flexDirection="row" my={1} width="100%">
            <SuiTypography variant="h6" gutterBottom>
              {headerTitle}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox width="80%">
          <Divider />
        </SuiBox>
        <SuiBox
          width="10%"
          display="flex"
          alignItem="center"
          justifyContent="right"
          //backgroundColor="red"
          flexDirection="row"
        >
          <Button
            onClick={onToggleInfo}
            sx={{
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
            }}
          >
            <SuiTypography variant="caption" textColor="text" mr={1} gutterBottom>
              {!visible ? "Show" : "Hide"}
            </SuiTypography>
            {!visible ? (
              <KeyboardArrowUpIcon sx={{ color: "#d3d3d3" }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ color: "#d3d3d3" }} />
            )}
          </Button>
        </SuiBox>
      </SuiBox>
      {visible && (
        <SuiBox width="100%" p={1}>
          <SuiBox display="flex" flexDirection="column" height="100%">
            <SuiTypography textColor="text" variant="h6" my={2} gutterBottom>
              Module Name
            </SuiTypography>
            <SuiBox width="100%" backgroundColor="#F2FCEC" p={2} mb={1} sx={{ borderRadius: 2 }}>
              <SuiTypography
                variant="body2"
                textColor="text"
                fontWeight="bold"
                my={2}
                gutterBottom
                //background
              >
                {title}
              </SuiTypography>
            </SuiBox>
            <SuiBox pb={1}>
              <SuiInput
                value={moduleName}
                key={"body"}
                placeholder={"Describe the level..."}
                onChange={onChangeTitle}
              />
            </SuiBox>
          </SuiBox>
          <SuiBox display="flex" flexDirection="column" height="100%">
            <SuiTypography textColor="text" variant="h6" my={2} gutterBottom>
              Description
            </SuiTypography>
          </SuiBox>
          <SuiBox width="100%" backgroundColor="#F2FCEC" p={2} mb={1} sx={{ borderRadius: 2 }}>
            <SuiTypography variant="body2" textColor="text" fontWeight="bold" my={2} gutterBottom>
              {description}
            </SuiTypography>
          </SuiBox>
          <RichTextEditor
            value={editorValue}
            onChange={onChangeEditor}
            toolbarConfig={toolbarConfig}
          />
          <SuiTypography textColor="text" variant="caption" my={2} gutterBottom>
            Shortly describe the course.
          </SuiTypography>
          <SuiBox my={4} width="100%">
            <SuiButton fullWidth variant="gradient" buttonColor="info" onClick={onUpdate}>
              UPDATE
            </SuiButton>
          </SuiBox>
        </SuiBox>
      )}
    </SuiBox>
  );
};

BasicInfo.propTypes = {
  headerTitle: PropTypes.string,
  visible: PropTypes.bool,
  onToggleInfo: PropTypes.func,
  title: PropTypes.string,
  moduleName: PropTypes.string,
  description: PropTypes.string,
  editorValue: PropTypes.any,
  onChangeEditor: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default BasicInfo;
