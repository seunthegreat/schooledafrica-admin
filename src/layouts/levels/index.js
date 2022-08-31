import React, { useMemo, useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SuiBox from "components/SuiBox";
import SoftButton from "components/SuiButton";
import LevelInformation from "../../layouts/levels/layouts/level-item";
import { Grid } from "@mui/material";
import AddLevelModal from "../../layouts/levels/layouts/addLevelModal";
import { useAuth } from "auth-context/auth.context";
import LevelApi from "../../api/Level";
import Loading from "../../components/Loading/index";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
//--fetch data--//
//import dummyData from "./data";

export default function Level() {
  let { user } = useAuth();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLevels = async () => {
    const token = user.token;
    setLoading(true);
    try {
      let response = await LevelApi.GetLevels({ token });
      setLoading(false);
      setLevels(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLevels();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "level",
        header: "Level",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
    ],
    []
  );
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pt={2} px={2} mb={3} display="flex" alignItems="right" justifyContent="right">
        <SoftButton
          onClick={() => setCreateModalOpen(true)}
          variant="outlined"
          buttonColor="primary"
        >
          Add Level
        </SoftButton>
      </SuiBox>
      <Grid justify="center" item xs={12} md={7}>
        {loading && <Loading />}
        {!loading && <LevelInformation level={levels} key={levels.name} />}
      </Grid>
      <AddLevelModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
      />
    </DashboardLayout>
  );
}
