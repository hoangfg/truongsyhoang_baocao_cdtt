import authorService from "../../services/authorService";
import {
  AUTHOR_SET,
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
} from "./actionTypes";

export const insertAuthor = (author) => async (dispatch) => {
  const service = new authorService();
  try {
    console.log(service);
    console.log(author);
    const response = await service.create(author);

    if (response.status === 201) {
      console.log("yes");
      dispatch({
        type: AUTHOR_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
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
};
