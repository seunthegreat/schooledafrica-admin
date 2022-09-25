import React, { useState, useEffect, useMemo } from "react";
import SuiBox from "components/SuiBox";
import PropTypes from "prop-types";

import ModulesApi from "../../api/Module";
import { useAuth } from "auth-context/auth.context";

//To be exported
// import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import Loading from "../../components/Loading/index";

//--layouts--//
import BasicInformation from "./layouts/basicInfo";
import Modules from "./layouts/modules";
import AddModule from "./layouts/addModule";
import VideoCard from "./layouts/videoCard";

function CourseDetails({ course, description, course_id }) {
  let { user } = useAuth();
  const token = user.token;

  const initialState = {
    modules: [],
  };
  const clearState = () => {
    setModules(initialState.modules);
  };

  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  //--getCourses from api--//
  const fetchModules = async () => {
    setLoading(true);
    try {
      let response = await ModulesApi.GetModules({ course_id, token });
      let modules = response.data.response;
      if (modules !== null) {
        console.log(response);
        setModules(modules);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let abortController = new AbortController();
    fetchModules();
    return () => {
      abortController.abort();
      clearState();
    };
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "module",
        header: "name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
    ],
    []
  );

  const Form = () => {
    return (
      <SuiBox sx={{ width: "60%" }}>
        <BasicInformation courseTitle={course} courseDescription={description} />
        <Modules
          onClick={() => setCreateModalOpen(true)}
          length={modules.length}
          modules={modules}
        />
      </SuiBox>
    );
  };

  return (
    <SuiBox component="ul" display="flex" alignItems="center" flexDirection="column" p={0} m={0}>
      <SuiBox sx={{ width: "75%", alignItems: "center", justifyContent: "center" }}>
        {loading && <Loading />}
        {!loading && (
          <Grid container spacing={1} justifyContent="space-around">
            <Form />
            <VideoCard />
          </Grid>
        )}
      </SuiBox>
      <AddModule
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        id={course_id}
      />
    </SuiBox>
  );
}

export default CourseDetails;

CourseDetails.propTypes = {
  course: PropTypes.string.isRequired,
  description: PropTypes.string,
  course_id: PropTypes.number,
};
