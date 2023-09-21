import authorService from "../../services/authorService";
import { AUTHOR_SET, COMMON_ERROR_SET, COMMON_LOADING_SET, COMMON_MESSAGE_SET } from "./actionTypes";

export const insertAuthor = (author, navigate) => async (dispatch) => {
  const service = new authorService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });

    const response = await service.create(author);

    if (response.status === 201) {
      dispatch({
        type:AUTHOR_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
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
    // console.log("error:" + error);
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
  });
  navigate("/authors");
};
