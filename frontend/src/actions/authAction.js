import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {API} from '../config'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import { toast } from "react-toastify";



// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const signin = userData => dispatch => {
  axios
    .post(`${API}/signin`, userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;

      localStorage.setItem("jwt", JSON.stringify(res.data) );
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });
    })
    .catch(err => {
      toast.error(err.response.data.error)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    })
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// // Log user out
// export const logoutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };

export const signout = next => {
     if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
            .then(response => dispatch => {
                console.log('signout', response);
                setAuthToken(false);
                dispatch(setCurrentUser({}));
            })
            .catch(err => console.log(err));
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false; 
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};
