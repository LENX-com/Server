const initialState = {
  products: [],
  errors: {},
  loading: false,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) { 
    case "ADMIN_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "ADMIN_PRODUCT_ERROR":
      return {
        ...state,
        errors: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
