import axios from "./index";

class ExamApi {
  static uploadExamCSV = ({ formData, token }) => {
    return axios.post(`${base}/importExam`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}

let base = "/api/auth";

export default ExamApi;
