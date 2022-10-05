import React, { useState, useEffect } from "react";

//--@mui material components--//
//import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import { useAuth } from "auth-context/auth.context";
import DashboardApi from "api/Dashboard";
import Loading from "../../../../components/Loading/index";

//import MiniStatisticsCard from "../molecules/MiniStatisticsCard";
import Stats from "../organisms/MiniStats";

function MiniStats() {
  let { user } = useAuth();
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialState = {
    stats: [],
  };

  let users = stats ? stats.users : 0;
  let payments = stats ? stats.payments : 0;
  let income = stats ? stats.income : 0;
  let totalIncome = income ? income.toLocaleString() : 0;
  let activeSubscribers = stats ? stats.active_subscriptions : 0;
  let courses = stats ? stats.courses : 0;
  let levels = stats ? stats.levels : 0;
  let quizzes = stats ? stats.quizzes : 0;
  let exams = stats ? stats.exams : 0;

  const clearState = () => {
    setStats(initialState.stats);
  };

  const fetchStats = async () => {
    const token = user.token;
    try {
      let response = await DashboardApi.GetMiniStats({ token });
      setLoading(false);
      setStats(response.data.response[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStats();
    return () => {
      clearState();
    };
  }, []);

  return (
    <SuiBox mb={3}>
      {loading && <Loading />}
      {!loading && (
        <Stats
          users={users}
          payments={payments}
          totalIncome={totalIncome}
          activeSubscribers={activeSubscribers}
          courses={courses}
          levels={levels}
          quizzes={quizzes}
          exams={exams}
        />
      )}
    </SuiBox>
  );
}

export default MiniStats;
