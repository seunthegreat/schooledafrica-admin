import axios from "./index";

class ExamApi {
  static addExam = ({ body, token }) => {
    return axios.post(`${base}/createExam`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  static uploadExamCSV = ({ formData, token }) => {
    return axios.post(`${base}/importExam`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  static getExams = (token) => {
    return axios.get(`${base}/getExams`, { headers: { Authorization: `Bearer ${token}` } });
  };
  static deleteExam = (data) => {
    return axios.delete(`${base}/deleteExam/${data.examId}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
}

let base = "/api/auth";

export default ExamApi;
