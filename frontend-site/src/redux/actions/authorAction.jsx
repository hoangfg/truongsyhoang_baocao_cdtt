import authorService from "../../services/authorService";
import {
  AUTHORS_LOADING_SET,
  AUTHORS_SET,
  AUTHOR_APPEND,
  AUTHOR_DELETE,
  AUTHOR_SET,
  AUTHOR_UPDATE,
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
} from "./actionTypes";

export const getAuthors = () => async (dispatch) => {
  const service = new authorService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: { isLoadingAuthors: true },
    });
    const response = await service.getAuthors()

    if (response.status === 200) {
      dispatch({
        type: AUTHORS_SET,
        payload: response.data,
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
    payload: { isLoadingAuthors: false },
  });
};

export const getById = (id) => async (dispatch) => {
  const service = new authorService();
  try {
    dispatch({
      type: AUTHORS_LOADING_SET,
      payload: { isLoadingAuthors: true },
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: AUTHOR_SET,
        payload: response.data,
      });
      console.log(response);
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
    type: AUTHORS_LOADING_SET,
    payload: { isLoadingAuthors: false },
  });
};
