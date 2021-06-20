import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/
// api.interceptors.request.use(
//   (config) => {
//     console.log(config)
//   },
//   (err) => {
//     console.log(err);
//   }
// );

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export { api };
