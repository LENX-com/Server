import {api} from "../utils/api";
import { API } from "../config";

export const addWishList = (productId) => async (dispatch) => {
  try {
    const resp = await api.post(`${API}/wishlist/create/${productId}`);
    dispatch({
      type: "ADD_WISHLIST",
      payload: resp,
    });
  } catch (error) {
    dispatch({
      type: "WISHLIST_ERROR",
      payload: error,
    });
  }
};
export const getWishList = () => async (dispatch) => {
  try {
    const resp = await api.get(`${API}/wishlist`);
    dispatch({
      type: "GET_WISHLIST",
      payload: resp,
    });
  } catch (error) {
    dispatch({
      type: "WISHLIST_ERROR",
      payload: error,
    });
    console.log(error);
  }
};
