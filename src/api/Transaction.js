import axios from "./index";

class TransactionApi {
  static GetHistory = (token) => {
    return axios.get(`${base}/getTransactionHistory`, {
      headers: { Authorization: `Bearer ${token.token}` },
    });
  };
}

let base = "/api/auth";

export default TransactionApi;
