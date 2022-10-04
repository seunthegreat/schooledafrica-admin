import React, { useState, useEffect } from "react";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import CreateRows from "../molecules/Rows";

import { useAuth } from "auth-context/auth.context";
import PaymentApi from "api/Payment";

// Custom styles for the Tables
import styles from "layouts/tables/styles";

import paymentsTableData from "../../data/columnData";
import AllPayments from "../organisms/AllPayments";

const renderData = (data) => {
  let rows = [];
  for (let i = 0; i < data.length; i++) {
    let payment = data[i];
    let key = i;
    let row = CreateRows(payment, key);
    rows.push(row);
  }
  return rows;
};

function History() {
  const classes = styles();
  const { columns: prCols } = paymentsTableData;

  let { user } = useAuth();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialState = {
    history: [],
  };

  const clearState = () => {
    setHistory(initialState.history);
  };

  const fetchHistory = async () => {
    const token = user.token;
    try {
      let response = await PaymentApi.GetHistory({ token });
      setLoading(false);
      setHistory(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchHistory();
    return () => {
      clearState();
    };
  }, []);

  return (
    <SuiBox py={3}>
      {!loading && (
        <SuiBox mb={3}>
          <AllPayments
            title={"Payments"}
            columnStyle={classes.tables_table}
            columnData={prCols}
            rowData={renderData(history)}
          />
        </SuiBox>
      )}
    </SuiBox>
  );
}

export default History;
