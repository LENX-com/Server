import {
  FOLLOW_ERROR,
  FOLLOW_MANUFACTURER,
  GET_FOLLOWING,
} from "../actions/types";
const initialState = {
  following: [],
  error: null,
  loading: true,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_MANUFACTURER:
      return {
        ...state,
        following: [...state.following, action.payload],
        loading: false,
      };
    case GET_FOLLOWING:
      return {
        ...state,
        following: action.payload,
        loading: false,
      };
    case FOLLOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
