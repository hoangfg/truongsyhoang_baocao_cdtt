import {
  PAGES_SET,
  PAGE_APPEND,
  PAGE_DELETE,
  PAGE_SET,
  PAGE_UPDATE,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  page: {},
  pages: [],
};

const pageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGE_SET:
      return { ...state, page: payload };
    case PAGES_SET:
      return { ...state, pages: payload };
    case PAGE_APPEND:
      return { ...state, pages: [payload, ...state.pages] };
    case PAGE_DELETE:
      return {
        ...state,
        pages: state.pages.filter((item) => item.id !== payload),
      };
    case PAGE_UPDATE:
      const newAuthor = state.pages.filter((item) => item.id !== payload.id);
      return {
        ...state,
        pages: [payload, ...newAuthor],
      };

    default:
      return state;
  }
};
export default pageReducer;
