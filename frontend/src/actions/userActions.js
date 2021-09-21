import { API } from "../config";
import { api } from "../utils/api";
import { FOLLOW_MANUFACTURER, FOLLOW_ERROR, GET_FOLLOWING,GET_ALL_MANUFACTURER, MANUFACTURER_ERROR, GET_SINGLE_MANUFACTURER, REVIEWS_ADMIN_ERROR, REVIEWS_ADMIN } from "./types";

//follow manufacturer page
export const followManufacturer = (formdata) => async (dispatch) => {
  try {
    const res = await api.post(`${API}/follow`, formdata);
    dispatch({
      type: FOLLOW_MANUFACTURER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FOLLOW_ERROR,
    });
  }
};
//get all people you are following
export const getFollowing = () => async (dispatch) => {
  try {
    const res = await api.get(`${API}/following`);
    dispatch({
      type: GET_FOLLOWING,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FOLLOW_ERROR,
    });
  }  
};

export const getAllManufacturer = () => async (dispatch) => {
  try {
    const res = await api.get(`${API}/manufacturer`)
    dispatch({
      type:GET_ALL_MANUFACTURER,
      payload:res.data
    })
  } catch (err) {
    dispatch({
      type:MANUFACTURER_ERROR,
    });
  
  }
};
export const getSingleManufacturer = (id) => async (dispatch) => {
  try {
    const res = await api.get(`${API}/manufacturer/${id}`)
    dispatch({
      type:GET_SINGLE_MANUFACTURER,
      payload:res.data
    })
  } catch (err) {
    dispatch({
      type:MANUFACTURER_ERROR,
    });
  
  }
};


//ADMIN
export const getReviewsByManufacturer = (slug) => async (dispatch) => {
  try {
    const res = await api.get(`${API}/reviews/manufacturer/${slug}`)
    dispatch({
      type:REVIEWS_ADMIN,
      payload:res.data
    })
  } catch (err) {
    dispatch({
      type:REVIEWS_ADMIN_ERROR,
      payload: err
    });   
  
  }
};

export const sendResponse = (reviewId, response) => async (dispatch) => {
  try {
    const res = await api.post(`${API}/review/response/${reviewId}`, response)
    dispatch({
      type: "SEND_RESPONSE",
    })
  } catch (err) {
    dispatch({
      type:REVIEWS_ADMIN_ERROR,
      payload: err
    });
  
  }
};

export const removeResponse =  (reviewId) => async (dispatch) => {
  try {
    const res = await api.put(`${API}/review/remove/response/${reviewId}`)
    dispatch({
      type: "REMOVE_RESPONSE",
    })
  } catch (err) {
    dispatch({
      type:REVIEWS_ADMIN_ERROR,
      payload: err
    });
  
  }}
