import axios from "./index";

class SubscriptionApi {
  static GetHistory = (token) => {
    return axios.get(`${base}/getSubscriptionHistory`, {
      headers: { Authorization: `Bearer ${token.token}` },
    });
  };
}

let base = "/api/auth";

export default SubscriptionApi;
