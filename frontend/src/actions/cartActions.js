import { api } from "../utils/api";
import { API } from "../config";

//add to cart
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const res = await api.get(`${API}/product/${productId}`);
    dispatch({
      type: "ADD_CART",
      payload: {
        product: res.data.data._id,
        quantity: res.data.data.quantity,
        name: res.data.data.name,
        description: res.data.data.description,
        price: res.data.data.price,
        photo: res.data.data.photo,
        qty: qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();

    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (err) {
    dispatch({
      type: "CART_ERROR",
    });
  }
};
export const removeCart = (productId) => (dispatch, getState) => {
  try {
    dispatch({
      type: "REMOVE_CART",
      payload:productId
    });
     const {
      cart: { cartItems },
    } = getState();

    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (err) {
    dispatch({
      type: "CART_ERROR",
    });
  }
};
