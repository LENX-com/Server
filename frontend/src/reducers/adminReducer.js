const initialState = {
  products: [],
  singleProduct: undefined ,
  errors: {},
  blogs: [],
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
     case "ADMIN_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload.data,
        loading: false,
      };
    case "ADMIN_PRODUCT_ERROR":
      return {
        ...state,
        errors: action.payload.data,
        loading: false,
      };
     case "ADMIN_BLOGS":
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
      case "ADMIN_BLOG_ERROR":
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
      case "ADMIN_BLOG_ADDED":
      return {
        ...state
      };
    default:
      return state;
  }
};
