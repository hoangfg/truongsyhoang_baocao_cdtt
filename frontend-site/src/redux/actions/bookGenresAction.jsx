import bookGenresService from "../../services/bookGenresService";
import {
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  GENRES_SET,
  GENRE_APPEND,
  GENRE_DELETE,
  GENRE_SET,
  GENRE_UPDATE,
} from "./actionTypes";

export const getGenres = () => async (dispatch) => {
  const service = new bookGenresService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: { isLoadingGenres: true },
    });
    const response = await service.getGenres();

    if (response.status === 200) {
      dispatch({
        type: GENRES_SET,
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
    payload: { isLoadingGenres: false },
  });
};

export const getById = (id) => async (dispatch) => {
  const service = new bookGenresService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: GENRE_SET,
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
