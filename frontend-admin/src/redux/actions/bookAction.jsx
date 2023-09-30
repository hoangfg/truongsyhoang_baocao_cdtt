import bookService from "../../services/bookService";
import {
  BOOKS_SET,
  BOOK_SET,
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
