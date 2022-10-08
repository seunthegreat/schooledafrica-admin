import axios from "./index";

class LevelApi {
  static AddLevel = ({ body, token }) => {
    return axios.post(`${base}/addLevel`, body, {
      headers: { Authorization: `Bearer ${token}` },
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
