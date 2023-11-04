import bookService from "../../services/bookService";
import {
  BOOKS_LOADING_SET,
  BOOKS_SET,
  BOOKS_STATE_CLEAR,
  BOOK_DELETE,
  BOOK_SET,
  BOOK_UPDATE,
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
} from "./actionTypes";

export const getBooks = () => async (dispatch) => {
  const service = new bookService();

  try {
    dispatch({
      type: BOOKS_LOADING_SET,
      payload: { isLoadingBooks: true },
    });

    const response = await service.getBooks();
    // console.log(response.data);
    if (response.status === 200) {
      dispatch({
        type: BOOKS_SET,
        payload: response.data.body,
      });
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }
  } catch (error) {
    // console.log("error:" + error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
  }
  dispatch({
    type: BOOKS_LOADING_SET,
    payload: { isLoadingBooks: false },
  });
};

export const getById = (id) => async (dispatch) => {
  const service = new bookService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log("1", response.data);
    if (response.status === 200) {
      dispatch({
        type: BOOK_SET,
        payload: response.data,
      });
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }
  } catch (error) {
    console.log("error:" + error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
  });
};
export const getBySlug = (slug) => async (dispatch) => {
  const service = new bookService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getBySlug(slug);
    console.log("1", response.data);
    if (response.status === 200) {
      dispatch({
        type: BOOK_SET,
        payload: response.data,
      });
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }
  } catch (error) {
    console.log("error:" + error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
  });
};
export const clearState = () => (dispatch) => {
  dispatch({ type: BOOKS_STATE_CLEAR });
};
