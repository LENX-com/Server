const initialState = {
  // orders: [
  //   {
  //     name: "Printers",
  //     _id: 1,
  //     status: "Processing",
  //   },
  //   {
  //     name: "Acessories",
  //     _id: 10,
  //     status: "Not processing",
  //   },
  //   {
  //     name: "Utensils",
  //     status: "Shipped",
  //     _id: 12,
  //   },
  //   {
  //     name: "Gadgets",
  //     status: "Delivered",
  //     _id: 14,
  //   },
  //   {
  //     name: "Alexia",
  //     status: "Delivered",
  //     _id: 142334,
  //   },
  //   {
  //     name: "Sprint wears",
  //     status: "Shipped",
  //     _id: 1443333,
  //   },
  //   {
  //     name: "Furnitures",
  //     status: "Processing",
  //     _id: 142234,
  //   },
  //   {
  //     name: "Blenders",
  //     status: "Processing",
  //     _id: 14332224,
  //   },
  // ],
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
