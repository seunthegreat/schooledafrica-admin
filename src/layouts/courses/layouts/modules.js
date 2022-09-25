import React from "react";
//import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import Alert from "@mui/material/Alert";
import SuiButton from "components/SuiButton";
import PropTypes from "prop-types";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const Modules = ({ onClick, length, modules }) => {
  const data = {
    id: "root",
    name: "Modules",
    children: modules,
  };
  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.name}
      nodeId={nodes.name}
      label={nodes.name}
      onClick={() => console.log("delete", nodes.name)}
    >
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  const RenderModules = () => {
    return (
      <SuiBox mb={1} ml={0.5}>
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ width: "100%", overflowY: "auto" }}
        >
          {renderTree(data)}
        </TreeView>
      </SuiBox>
    );
  };
  return (
    <SuiBox component="form" role="form" sx={{ width: "100%" }}>
      <SuiBox>
        {length == 0 && <Alert severity="info">This course does not have any content!</Alert>}
        {length !== 0 && <RenderModules />}
        <SuiBox mt={2} mb={2}>
          <SuiButton onClick={onClick} variant="gradient" buttonColor="info">
            Add Module
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </SuiBox>
  );
};

Modules.propTypes = {
  onClick: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  modules: PropTypes.array,
};

export default Modules;
