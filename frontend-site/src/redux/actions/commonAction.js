import {
  AUTHORS_LOADING_SET,
  BOOKS_LOADING_SET,
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  GENRES_LOADING_SET,
  LANGUAGES_LOADING_SET,
  PUBLISHERS_LOADING_SET,
} from "./actionTypes";

export const setMessage = (message) => (dispatch) => {
  dispatch({
    type: COMMON_MESSAGE_SET,
    payload: message,
  });
};
export const setError = (error) => (dispatch) => {
  dispatch({
    type: COMMON_ERROR_SET,
    payload: error,
  });
};
export const setLoading = (loading) => (dispatch) => {
  dispatch({
    type: COMMON_LOADING_SET,
    payload: loading,
  });
};
export const setBooksLoading = (loading) => (dispatch) => {
  dispatch({
    type: BOOKS_LOADING_SET,
    payload: loading,
  });
};
export const setAuthorsLoading = (loading) => (dispatch) => {
  dispatch({
    type: AUTHORS_LOADING_SET,
    payload: loading,
  });
};
export const setLanguagesLoading = (loading) => (dispatch) => {
  dispatch({
    type: LANGUAGES_LOADING_SET,
    payload: loading,
  });
};
export const setGenresLoading = (loading) => (dispatch) => {
  dispatch({
    type: GENRES_LOADING_SET,
    payload: loading,
  });
};
export const setPublisgersLoading = (loading) => (dispatch) => {
  dispatch({
    type: PUBLISHERS_LOADING_SET,
    payload: loading,
  });
};