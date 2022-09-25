import axios from "./index";

class LevelApi {
  static AddLevel = (data) => {
    return axios.post(`${base}/addLevel`, data, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  static GetLevels = (token) => {
    return axios.get(`${base}/getLevels`, { headers: { Authorization: `Bearer ${token}` } });
  };

  static GetLevelName = (data) => {
    return axios.get(`${base}/getLevelName/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };

  static DeleteLevel = (data) => {
    return axios.delete(`${base}/deleteLevel/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
}

let base = "/api/auth";

export default LevelApi;
