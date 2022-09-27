import axios from "./index";

class DashboardApi {
  static GetMiniStats = (token) => {
    return axios.get(`${base}/getMiniStats`, {
      headers: { Authorization: `Bearer ${token.token}` },
    });
  };
}

let base = "/api/auth";

export default DashboardApi;
