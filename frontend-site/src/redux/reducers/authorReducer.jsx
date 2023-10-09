import {
  AUTHORS_SET,
  AUTHOR_APPEND,
  AUTHOR_DELETE,
  AUTHOR_SET,
  AUTHOR_UPDATE,
} from "../actions/actionTypes";

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
    case AUTHOR_APPEND:
      return { ...state, authors: [payload, ...state.authors] };
    case AUTHOR_DELETE:
      return {
        ...state,
        authors: state.authors.filter((item) => item.id !== payload),
      };
    case AUTHOR_UPDATE:
      const newAuthor = state.authors.filter((item) => item.id !== payload.id)
      return {
        ...state,
        authors: [payload, ...newAuthor]
      };

    default:
      return state;
  }
};
export default authorReducer;
