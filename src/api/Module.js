import axios from "./index";

class ModulesApi {
  static AddModule = (data) => {
    return axios.post(`${base}/addModule`, data, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  static GetModules = (data) => {
    return axios.get(`${base}/getModules/${data.course_id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  static DeleteModule = (data) => {
    return axios.delete(`${base}/deleteCourse/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
}

let base = "/api/auth";

export default ModulesApi;
