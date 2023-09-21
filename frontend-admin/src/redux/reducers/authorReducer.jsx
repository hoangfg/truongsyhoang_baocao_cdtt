import { AUTHORS_SET, AUTHOR_DELETE, AUTHOR_SET } from "../actions/actionTypes";

// rxreducer
const initialState = {
  author: {},
  authors: [],
};

const authorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHOR_SET:
      return { ...state, author: payload };
    case AUTHORS_SET:
      return { ...state, authors: payload };
    case AUTHOR_DELETE:
      return {
        ...state,
        authors: state.authors.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
export default authorReducer;
