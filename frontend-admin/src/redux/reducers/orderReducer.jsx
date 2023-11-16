import {
  ORDERS_SET,
  ORDER_APPEND,
  ORDER_DELETE,
  ORDER_SET,
  ORDER_UPDATE,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  order: {},
  orders: [],
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_SET:
      return { ...state, order: payload };
    case ORDERS_SET:
      console.log("reducer", payload);
      return { ...state, orders: payload };
    case ORDER_APPEND:
      return { ...state, orders: [payload, ...state.orders] };
    case ORDER_DELETE:
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== payload),
      };
    case ORDER_UPDATE:
      const newOrder = state.orders.filter((item) => item.id !== payload.id);
      return {
        ...state,
        orders: [payload, ...newOrder],
      };

    default:
      return state;
  }
};
export default orderReducer;
