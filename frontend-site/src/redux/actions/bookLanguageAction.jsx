import bookLanguageService from "../../services/bookLanguageService";
import {
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  LANGUAGES_SET,
  LANGUAGE_APPEND,
  LANGUAGE_DELETE,
  LANGUAGE_SET,
  LANGUAGE_UPDATE,
} from "./actionTypes";

export const getLanguage = () => async (dispatch) => {
  const service = new bookLanguageService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: { isLoadingLanguages: true },
    });
    const response = await service.getLanguage();

    if (response.status === 200) {
      dispatch({
        type: LANGUAGES_SET,
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
    ayload: { isLoadingLanguages: false },
  });
};
export const getById = (id) => async (dispatch) => {
  const service = new bookLanguageService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: LANGUAGE_SET,
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
    type: COMMON_LOADING_SET,
    payload: false,
  });
};
