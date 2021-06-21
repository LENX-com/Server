import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer.js";
import { postReducer } from './postReducer'
import { alertReducer } from './alertReducer'
import { wishListReducer } from "./wishlistReducer";
import { categoryReducer } from "./categoryReducers";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productReducer";
import { ChatReducer } from './ChatReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  errors: errorReducer,
  category: categoryReducer,
  order: orderReducer,
  post: postReducer,
  alert: alertReducer,
  wishlist: wishListReducer,
  chat: ChatReducer
});

export default rootReducer;
