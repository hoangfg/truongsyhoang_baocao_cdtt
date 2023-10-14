import {
  STORES_SET,
  STORE_APPEND,
  STORE_DELETE,
  STORE_SET,
  STORE_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  store: {},
  stores: [],
};
const storeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORE_SET:
      return { ...state, store: payload };
    case STORES_SET:
      return { ...state, stores: payload };
    case STORE_APPEND:
      return { ...state, stores: [payload, ...state.stores] };
    case STORE_DELETE:
      return {
        ...state,
        stores: state.stores.filter((item) => item.id !== payload),
      };
    case STORE_UPDATE:
      const updatedStores = state.stores.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        stores: updatedStores,
      };
    default:
      return state;
  }
};

export default storeReducer;
