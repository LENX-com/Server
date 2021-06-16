import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer.js";
import { postReducer } from "./postReducer";
import { wishListReducer } from "./wishlistReducer";
import { alertReducer } from "./alertReducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  alert: alertReducer,
  wishlist: wishListReducer,
});

export default rootReducer;
