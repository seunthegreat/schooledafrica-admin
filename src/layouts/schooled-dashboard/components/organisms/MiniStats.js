import React from "react";
//--@mui material components--//
import Grid from "@mui/material/Grid";
import MiniStatisticsCard from "../molecules/MiniStatisticsCard";

//--prop-types is a library for typechecking of props--//
import PropTypes from "prop-types";

function Stats({ users, payments, totalIncome, activeSubscribers }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} xl={3}>
        <MiniStatisticsCard
          title={{ text: "Users" }}
          count={users}
          icon={{ color: "info", component: "group" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <MiniStatisticsCard
          title={{ text: "Total Payments" }}
          count={payments}
          icon={{ color: "info", component: "payments" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <MiniStatisticsCard
          title={{ text: "Total Income" }}
          count={totalIncome}
          icon={{ color: "info", component: "receiptLong" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} xl={3}>
        <MiniStatisticsCard
          title={{ text: "Active Subscribers" }}
          count={activeSubscribers}
          icon={{
            color: "info",
            component: "subscriptions",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Stats;

Stats.propTypes = {
  users: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  payments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalIncome: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  activeSubscribers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
