import React, { useState, useEffect } from "react";
import SuiBox from "components/SuiBox";
import { Grid } from "@mui/material";
import CourseCard from "components/CourseCard";
import CourseApi from "../../api/Course";
import CourseDetails from "./courseDetails";
import { useAuth } from "auth-context/auth.context";
import Loading from "../../components/Loading/index";
// import PropTypes from "prop-types";

// import phonetics from "assets/images/phonetics.jpeg";
// import algebra from "assets/images/algebra.jpeg";
// import chemistry from "assets/images/chemistry.jpeg";

function CourseList() {
  let { user } = useAuth();
  const token = user.token;

  const initialState = {
    courses: [],
  };

  const clearState = () => {
    setCourses(initialState.courses);
  };

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [displayCourseList, setDisplayCourseList] = useState(true);
  const [displayCourseDetails, setDisplayCourseDetails] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);

  //--getCourses from api--//
  const fetchCourses = async () => {
    setLoading(true);
    try {
      let response = await CourseApi.GetCourses({ token });
      let coursesList = response.data.response;
      if (coursesList !== null) {
        setCourses(coursesList);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let abortController = new AbortController();
    fetchCourses();
    return () => {
      abortController.abort();
      clearState();
    };
  }, []);

  const showCourseDetails = (name, description, id) => {
    setDisplayCourseList(false);
    setDisplayCourseDetails(true);
    setSelectedCourse(name);
    setDescription(description);
    setId(id);
  };

  return (
    <SuiBox pt={2} px={2}>
      {displayCourseDetails && (
        <CourseDetails course={selectedCourse} description={description} course_id={id} />
      )}
      {displayCourseList && (
        <Grid container spacing={3}>
          {loading && <Loading />}
          {courses.map((e) => {
            return (
              <Grid item xs={12} md={6} xl={3} key={e.id}>
                {!loading && (
                  <CourseCard
                    image={e.image}
                    label={e.level_id}
                    title={e.name}
                    description={e.description}
                    key={e.id}
                    onClick={() => showCourseDetails(e.name, e.description, e.id)}
                    action={{
                      type: "internal",
                      color: "info",
                      label: "view course",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      )}
    </SuiBox>
  );
}

export default CourseList;

// CourseList.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
