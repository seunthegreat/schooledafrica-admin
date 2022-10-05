import PropTypes from "prop-types";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Table from "../atoms/Table";
import Card from "@mui/material/Card";

function AllPayments({ title, columnStyle, columnData, rowData }) {
  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiTypography variant="h6">{title}</SuiTypography>
      </SuiBox>
      <SuiBox customClass={columnStyle}>
        <Table columns={columnData} rows={rowData} />
      </SuiBox>
    </Card>
  );
}

AllPayments.propTypes = {
  title: PropTypes.string,
  columnStyle: PropTypes.string,
  columnData: PropTypes.array,
  rowData: PropTypes.array,
};

export default AllPayments;