

const initialState = {
  orders: [
    {
    _id:1,
    name:"printers",
    address:"cadbury london",
    status:"shipped",
    price:200,
  },
    {
    _id:2,
    name:"electronics",
    address:"mainland hedge fury",
    status:"processing",
    price:800,
  },
    {
    _id:3,
    name:"beverages",
    address:"lake highland",
    status:"shipped",
    price:300,
  },
    {
    _id:6,
    name:"beverages",
    address:"lake highland",
    status:"shipped",
    price:300,
  },
    {
    _id:4,
    name:"coffee",
    address:"nicks office",
    status:"processed",
    price:100,
  },
],
  totalOrder: 0,
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
        totalOrder: action.payload.total,
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
