import React, { useState, useEffect } from "react";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import CreateRows from "../../molecules/Row";

import { useAuth } from "auth-context/auth.context";
import ExamApi from "api/Exam";

// Custom styles for the Tables
import styles from "layouts/tables/styles";

import examsTableData from "../../../data/columnData";
import AllExams from "../../organisms/AllExams";

function ExamRecord() {
  const renderData = (data) => {
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      let transaction = data[i];
      let key = i;
      let row = CreateRows(transaction, key);
      rows.push(row);
    }
    return rows;
  };
  const classes = styles();
  const { columns: prCols } = examsTableData;

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
      let response = await ExamApi.getExams(token);
      setLoading(false);
      setHistory(response.data.response);
      //console.log(response.data.response);
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
          <AllExams
            title={"Exam Record"}
            columnStyle={classes.tables_table}
            columnData={prCols}
            rowData={renderData(history)}
          />
        </SuiBox>
      )}
    </SuiBox>
  );
}

export default ExamRecord;
