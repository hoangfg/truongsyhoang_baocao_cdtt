import menuService from "../../services/menuService";
import {
  MENUS_SET,
  MENU_APPEND,
  MENU_DELETE,
  MENU_SET,
  MENU_UPDATE,
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
} from "./actionTypes";


export const getMenus = () => async (dispatch) => {
  const service = new menuService();
  console.log(service);
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getMenus();

    if (response.status === 200) {
      dispatch({
        type: MENUS_SET,
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
    payload: false,
  });
};

export const getById = (id) => async (dispatch) => {
  const service = new menuService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: MENU_SET,
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
