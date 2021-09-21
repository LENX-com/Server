import {api, publicApi} from "../utils/api";
import { API } from "../config";
import queryString from "query-string";
import axios from 'axios'


//Add like to review
export const AddLike = (productReviewId) => async (dispatch) => {
  try {
    const res = await api.put(`${API}/product/like/${productReviewId}`,);
    dispatch({
      type: "PRODUCT_REVIEW_LIKE",
      payload: res.data,
    });
  } catch (err) {    
    dispatch({
      type: "PRODUCT_ERROR",
    });
  }
};

export const RemoveLike = (productReviewId) => async (dispatch) => {
  try {
    const res = await api.put(`${API}/product/unlike/${productReviewId}`,);
    dispatch({
      type: "PRODUCT_REVIEW_UNLIKE",
      payload: res.data,
    });
  } catch (err) {    
    dispatch({
      type: "PRODUCT_ERROR",
    });
  }
};



 //Unlike review