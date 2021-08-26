import { API } from "../config";
import { api } from "../utils/api";
import { FOLLOW_MANUFACTURER, FOLLOW_ERROR, GET_FOLLOWING,GET_ALL_MANUFACTURER, MANUFACTURER_ERROR, GET_SINGLE_MANUFACTURER } from "./types";

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
