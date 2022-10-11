import axios from "./index";

class CourseApi {
  static AddCourse = (data) => {
    return axios.post(`${base}/addCourse`, data, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  static GetCourses = (token) => {
    return axios.get(`${base}/getCourses`, { headers: { Authorization: `Bearer ${token}` } });
  };

  static GetCoursesByLevel = ({ levelId, token }) => {
    return axios.get(`${base}/getCourseByLevel-id/${levelId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static updateCourseIcon = ({ courseId, body, token }) => {
    return axios.put(`${base}/updateCourseIcon/${courseId}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static updateCourseImage = ({ courseId, body, token }) => {
    return axios.put(`${base}/updateCourseImage/${courseId}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static DeleteCourse = (data) => {
    return axios.delete(`${base}/deleteCourse/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
}

let base = "/api/auth";

export default CourseApi;
