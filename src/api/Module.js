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

  static updateModule = ({ module_id, body, token }) => {
    return axios.put(`${base}/updateModule/${module_id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  static GetModulesContent = (data) => {
    return axios.get(`${base}/getModuleContents/${data.module_id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  static DeleteModule = (data) => {
    return axios.delete(`${base}/deleteCourse/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  //--Contents--//
  static updateModuleContent = ({ module_id, body, token }) => {
    return axios.put(`${base}/updateModuleContent/${module_id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}

let base = "/api/auth";

export default ModulesApi;
