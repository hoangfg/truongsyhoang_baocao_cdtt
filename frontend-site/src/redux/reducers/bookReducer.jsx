import {
  BOOKS_SET,
  BOOKS_STATE_CLEAR,
  BOOK_DELETE,
  BOOK_SET,
  BOOK_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  book: {},
  books: [],
};

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_SET:
      return { ...state, book: payload };
    case BOOKS_SET:
      return { ...state, books: payload };
    case BOOK_DELETE:
      return {
        ...state,
        books: state.books.filter((item) => item.id !== payload),
      };
    case BOOK_UPDATE:
      const newBook = state.books.filter((item) => item.id !== payload.id);
      return {
        ...state,
        books: [payload, ...newBook],
      };
    case BOOKS_STATE_CLEAR:
      return { book: {}, books: [] };
    default:
      return state;
  }
};
export default bookReducer;
