import axios from "axios";
import { API } from "../../config";

export const addWishList = async (data) => {
  try {
    const resp = await axios.post(`${API}`);
    return {
      type: "ADD_WISHLIST",
      payload: resp,
    };
  } catch (error) {
    console.log(error);
  }
};
