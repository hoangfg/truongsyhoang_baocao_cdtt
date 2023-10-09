import {
  PUBLISHERS_SET,
  PUBLISHERS_STATE_CLEAR,
  PUBLISHER_DELETE,
  PUBLISHER_SET,
} from "../actions/actionTypes";

const initialState = {
  publisher: {},
  publisheries: [],
};

const publisherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PUBLISHER_SET:
      return { ...state, publisher: payload };

    case PUBLISHERS_SET:
      return { ...state, publishers: payload };
    case PUBLISHER_DELETE:
      return {
        ...state,
        publishers: state.publishers.filter((item) => item.id !== payload),
      };
    case PUBLISHERS_STATE_CLEAR:
      return { publisher: {}, publisheries: [] };
    default:
      return state;
  }
};
export default publisherReducer;
