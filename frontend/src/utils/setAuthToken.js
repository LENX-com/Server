import api from './api';
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
