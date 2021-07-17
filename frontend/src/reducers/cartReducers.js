const initialState = {
  products: [],
  loading: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        products: [...state.products, action.payload.data],
        loading: false,
      };
    default:
      return state;
  }
};
