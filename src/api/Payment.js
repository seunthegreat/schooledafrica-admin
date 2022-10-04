import axios from "./index";

class PaymentApi {
  static GetHistory = (token) => {
    return axios.get(`${base}/getPaymentHistory`, {
      headers: { Authorization: `Bearer ${token.token}` },
    });
  };
}

let base = "/api/auth";

export default PaymentApi;
