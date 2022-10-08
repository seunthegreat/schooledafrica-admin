import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid } from "@mui/material";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";
import { makeStyles } from "@mui/styles";

import LevelApi from "api/Level";
import { useAuth } from "auth-context/auth.context";

import LevelCard from "./components/atoms/LevelCard";

function Levels() {
  let { user } = useAuth();
  const [levels, setLevels] = useState([]);
  const [levelName, setLevelName] = useState(null);
  const [description, setDescription] = useState(null);

  const fetchLevels = async () => {
    const token = user.token;
    try {
      let response = await LevelApi.GetLevels({ token });
      setLevels(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLevels();
  }, []);

  const addLevel = (obj) => {
    setLevels((current) => [...current, obj]);
  };

  const removeLevel = async (index, id) => {
    setLevels([...levels.slice(0, index), ...levels.slice(index + 1)]);
    const token = user.token;
    try {
      let response = await LevelApi.DeleteLevel({ id, token });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddLevel = async () => {
    let body = {
      name: levelName.toUpperCase(),
      description: description,
    };
    addLevel(body);
    try {
      const token = user.token;
      let response = await LevelApi.AddLevel({ body, token });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const [showAddLevel, setShowAddLevel] = useState(false);
  const handleToggle = () => {
    setShowAddLevel(!showAddLevel);
  };

  const useStyles = makeStyles({
    container: {
      height: "100%",
      width: "100%",
    },
  });
  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={2}>
        {levels.map((e, index) => {
          return (
            <Grid item xs={12} lg={4} key={index}>
              <LevelCard
                key={e.id}
                name={e.name}
                description={e.description}
                onPress={() => removeLevel(index, e.id)}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} lg={4}>
          <Card>
            <Button onClick={handleToggle}>
              <SuiBox p={0.5} width="100%">
                <PlaceholderCard title={{ variant: "h5", text: "New Level" }} outlined />
              </SuiBox>
            </Button>
          </Card>
        </Grid>
      </Grid>
      <SuiBox
        my={3}
        //backgroundColor="red"
        width="100%"
        alignContent="center"
        display="flex"
        justifyContent="center"
      >
        {showAddLevel && (
          <Card className={classes.container}>
            <SuiBox p={2} height="100%">
              <SuiBox display="flex" flexDirection="column" height="100%">
                <SuiBox width="100%" display="flex" flexDirection="row">
                  <SuiBox width="90%" display="flex" height="100%">
                    <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                      Level Name
                    </SuiTypography>
                  </SuiBox>
                  <SuiBox
                    width="10%"
                    display="flex"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <SuiButton
                      fullWidth
                      variant="outlined"
                      buttonColor="info"
                      onClick={handleToggle}
                    >
                      Hide
                    </SuiButton>
                  </SuiBox>
                </SuiBox>
                <SuiBox>
                  <SuiInput
                    key={"header"}
                    placeholder={"Enter level name..."}
                    onChange={(e) => setLevelName(e.target.value)}
                  />
                </SuiBox>
              </SuiBox>
              <SuiBox display="flex" flexDirection="column" height="100%">
                <SuiTypography variant="h6" fontWeight="bold" my={2} gutterBottom>
                  Description
                </SuiTypography>
                <SuiBox pb={1}>
                  <SuiInput
                    key={"body"}
                    placeholder={"Describe the level..."}
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </SuiBox>
              </SuiBox>
              <SuiBox>
                <SuiButton fullWidth variant="gradient" buttonColor="info" onClick={handleAddLevel}>
                  Add Level
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </Card>
        )}
      </SuiBox>
    </DashboardLayout>
  );
}

export default Levels;
