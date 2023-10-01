import bookService from "../../services/bookService";
import {
  BOOKS_SET,
  BOOKS_STATE_CLEAR,
  BOOK_DELETE,
  BOOK_SET,
  BOOK_UPDATE,
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
} from "./actionTypes";

export const insertBook = (book, navigate) => async (dispatch) => {
  const service = new bookService();

  try {
    const response = await service.create(book);
    console.log(book);
    console.log(response.data);
    if (response.status === 201) {
      console.log("yes", response);
      dispatch({
        type: BOOK_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
      //   dispatch({
      //     type: BOOK_APPEND,
      //     payload: response.data,
      //   });
    } else {
      console.log("no1");
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }
  } catch (error) {
    console.log("no", error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
    // console.log("error:" + error);
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
  });
  navigate("/product");
};
export const getBooks = () => async (dispatch) => {
  const service = new bookService();

  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
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
    type: COMMON_LOADING_SET,
    payload: false,
  });
};
export const statusBook = (id, statusData) => async (dispatch) => {
  const service = new bookService();
  try {
    const response = await service.status(id, statusData);
    if (response.status === 200) {
      dispatch({
        type: BOOK_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật trang thái thành công",
      });
      dispatch(getBooks());
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }
  } catch (error) {
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
  } finally {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });
  }
};

export const deleteById = (id) => async (dispatch) => {
  const service = new bookService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.deleteById(id);
    console.log("1", response.data);
    if (response.status === 200) {
      dispatch({
        type: BOOK_DELETE,
        payload: id,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
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
      payload: error.response.data.body
        ? error.response.data.message
        : error.message,
    });
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
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
export const clearState = () => (dispatch) => {
  dispatch({ type: BOOKS_STATE_CLEAR });
};
export const updateBook = (id, book, navigate) => async (dispatch) => {
  const service = new bookService();
  try {
    const { id } = book;
    const response = await service.update(id, book);

    if (response.status === 201) {
      dispatch({
        type: BOOK_SET,
        payload: response.data,
      });
      dispatch({
        type: BOOK_UPDATE,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật thành công",
      });
      dispatch(getBooks);
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }
  } catch (error) {
    console.log("no", error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
    // console.log("error:" + error);
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
  });
  navigate("/product");
};
