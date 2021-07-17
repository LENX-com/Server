import { api } from "../utils/api";
import { API } from "../config";

//add to cart
export const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const res = await api.get(`${API}/product/${productId}`);
    dispatch({
      type: "ADD_CART",
      payload: {
          _id:res.data._id,
          name:res.data.name,
          photo:res.data.photo,
          description:res.data.description,
          price:res.data.price,
          qty
      }
    });
  } catch (err) {
    dispatch({
      type: "CART_ERROR",
    });
  }
};
export const removeCart = (productId, qty) => (dispatch) => {
  try {
    dispatch({
      type: "REMOVE_CART",
    });
  } catch (err) {
    dispatch({
      type: "CART_ERROR",
    });
  }
};
