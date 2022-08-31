import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (token) => {
    return axios.get(`${base}/logout`, { headers: { Authorization: `Bearer ${token}` } });
  };
}

let base = "/api/auth";

export default AuthApi;
