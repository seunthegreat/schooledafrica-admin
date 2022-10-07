import axios from "./index";

class QuizApi {
  static getQuiz = (data) => {
    return axios.get(`${base}/getQuiz/${data.quiz_id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
  static createQuestion = (data) => {
    return axios.post(`${base}/createQuiz`, data.body, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
  static deleteQuestion = (data) => {
    return axios.delete(`${base}/deleteQuiz/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
  };
}

let base = "/api/auth";

export default QuizApi;
