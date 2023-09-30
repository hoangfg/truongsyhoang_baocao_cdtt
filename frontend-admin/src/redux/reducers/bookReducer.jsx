import { BOOKS_SET, BOOK_SET } from "../actions/actionTypes";

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

    default:
      return state;
  }
};
export default bookReducer;
