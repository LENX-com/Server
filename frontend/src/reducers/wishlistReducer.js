const initialState = {
  wishlists: [],
  loading: false,
};

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
