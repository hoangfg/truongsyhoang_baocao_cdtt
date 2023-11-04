import publisherService from "../../services/publisherService";
import {
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  PUBLISHERS_SET,
  PUBLISHERS_STATE_CLEAR,
  PUBLISHER_DELETE,
  PUBLISHER_SET,
} from "./actionTypes";

export const getPublishers = () => async (dispatch) => {
  const service = new publisherService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: { isLoadingPublishers: true },
    });
    const response = await service.getPublishes();

    if (response.status === 200) {
      dispatch({
        type: PUBLISHERS_SET,
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
    payload: { isLoadingPublishers: false },
  });
};

export const getById = (id) => async (dispatch) => {
  const service = new publisherService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: PUBLISHER_SET,
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
