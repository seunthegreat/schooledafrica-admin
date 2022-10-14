// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO Material-UI example components
import TimelineItem from "examples/Timeline/TimelineItem";

function StatementOverview() {
  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
          Statement overview
        </SuiTypography>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            <SuiTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon className="font-bold text-success">arrow_upward</Icon>
            </SuiTypography>
            &nbsp;
            <SuiTypography variant="button" textColor="text" fontWeight="medium">
              24%
            </SuiTypography>{" "}
            this month
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <TimelineItem
          color="info"
          icon="paid"
          title="New payment by @ p.abilawon@gmail.com"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="success"
          icon="paid"
          title="10 successful payments this week"
          dateTime="17 DEC"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="5 Subscriptions ends this week"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="vpn_key"
          title="4 new subscribers this week"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="error"
          icon="payment"
          title="New transaction declined with reference vwwsfysg"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="New transaction successful with reference vwwsfysg"
          dateTime="20 DEC 2:20 AM"
        />
      </SuiBox>
    </Card>
  );
}

export default StatementOverview;
