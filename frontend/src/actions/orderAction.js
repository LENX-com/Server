import { api } from "../utils/api";
import { API } from "../config";

//create order
export const createOrder = (userId, createOrderData) => async (dispatch) => {
  try {
    const res = await api.get(`${API}/order/create/${userId}`, {
      order: createOrderData,
    });
    dispatch({
      type: "ADD_ORDER",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "ORDER_ERROR",
    });
  }
};


// all orders
export const listOrders = () => async (dispatch) => {
  try {
    const res = await api.get(`${API}/orders`);
    dispatch({
      type: "GET_ORDERS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "ORDER_ERROR",
    });
  }
};
// all orders
export const orderByUser = (page) => async (dispatch) => {
  try {
    const res = await api.get(`${API}/order/purchaseHistory`);
    dispatch({
      type: "GET_ORDERS_BY_USER",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "ORDER_ERROR",
    });
  }
};
// order status values
export const getStatusValues = () => async (dispatch) => {
  try {
    const res = await api.get(`${API}/order/status-values`);
    dispatch({
      type: "ORDER_STATUS_VALUES",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "ORDER_ERROR",
    });
  }
};
// update order status
export const updateOrderStatus = (orderId, status) => async (dispatch) => {
  try {
    const res = await api.post(`${API}/order/${orderId}/update_status`, status);
    dispatch({
      type: "UPDATE_ORDER",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "ORDER_ERROR",
    });
  }
};
