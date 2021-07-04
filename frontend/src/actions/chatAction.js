import {api, publicApi} from "../utils/api";
import { API } from "../config";
// create category
export const setCurrentChat = (category) => async (dispatch) => {
  try {
    const res = await api.post(`${API}/category/create`, category);
    dispatch({
      type: "ADD_CATEGORY",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "CATEGORY_ERROR",
    });
  }
};
// all categories
export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get(`${API}/categories`);
    dispatch({
      type: "GET_CATEGORIES",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "CATEGORY_ERROR",
    });
  }
};