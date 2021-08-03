import { combineReducers } from "redux";
import { reducer as searchReducer } from "redux-search";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer.js";
import { postReducer } from "./postReducer";
import { alertReducer } from "./alertReducer";
import { wishListReducer } from "./wishlistReducer";
import { categoryReducer } from "./categoryReducers";
import { orderReducer as order } from "./orderReducer";
import { productReducer } from "./productReducer";
import { ChatReducer } from "./ChatReducer";
import { cartReducer } from "./cartReducers";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
  order,
  cart: cartReducer,
  product: productReducer,
  errors: errorReducer,
  category: categoryReducer,
  post: postReducer,
  alert: alertReducer,
  wishlist: wishListReducer,
  chat: ChatReducer,
});

export default rootReducer;
