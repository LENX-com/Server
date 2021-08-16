import {api, publicApi} from "../utils/api";
import { API } from "../config";

// create product
export const createQuestion = (productId, question) => async (dispatch) => {
  try {
    const res = await api.post(`${API}/question/${productId}`, question);
    dispatch({
      type: "QUESTION_ADDED_SUCCESFULLY",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "QUESTION_ERROR",
    });
  }
};

export const createAnswer = (productId, question) => async (dispatch) => {
  try {
    const res = await api.post(`${API}/question/$${productId}`, question);
    dispatch({
      type: "ANSWER_ADDED_SUCCESFULLY",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "QUESTION_ERROR",
    });
  }
};

// all products
export  const getQuestionsByProduct = (productId) => async (dispatch) => {
  try {
    const res = await api.get(
      `${API}/questions/${productId}`
    );
    dispatch({
      type: "GET_QUESTIONS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "QUESTION_ERROR",
    });
  }
};
