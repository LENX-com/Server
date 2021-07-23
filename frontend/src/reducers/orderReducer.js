const initialState = {
  orders: [],
  statusValues: [],
  errors: {},
  loading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case "GET_ORDERS_BY_USER":
      return {
        ...state,
        // orders: state.orders,
        orders: action.payload.orders,
        loading: false,
      };
    case "ORDER_STATUS_VALUES":
      return {
        ...state,
        statusValues: action.payload,
        loading: false,
      };
    case "UPDATE_ORDER":
      return {
        ...state,
        order: action.payload,
        loading: false,
      };
    case "ORDER_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
