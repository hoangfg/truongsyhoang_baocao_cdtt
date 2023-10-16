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

export const insertMenu = (menu) => async (dispatch) => {
  const service = new menuService();
  console.log("ser", service);
  try {
    const response = await service.create(menu);
    console.log("menu", menu);
    console.log("repon ", response.data);
    if (response.status === 201) {
      console.log("yes", response);
      dispatch({
        type: MENU_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
      dispatch({
        type: MENU_APPEND,
        payload: response.data,
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
export const deleteById = (id) => async (dispatch) => {
  const service = new menuService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.deleteById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: MENU_DELETE,
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
export const updateMenu = (menu) => async (dispatch) => {
  const service = new menuService();
  try {
    const { id } = menu;
    const response = await service.update(id, menu);

    if (response.status === 201) {
      dispatch({
        type: MENU_SET,
        payload: response.data,
      });
      dispatch({
        type: MENU_UPDATE,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật thành công",
      });
      dispatch(getMenus);
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
};
export const statusMenu = (id, menu) => async (dispatch) => {
  const service = new menuService();
  console.log(menu);
  try {
    // dispatch({
    //   type: COMMON_LOADING_SET,
    //   payload: true,
    // });

    const response = await service.status(id, menu);

    if (response.status === 200) {
      dispatch({
        type: MENU_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật trang thái thành công",
      });
      dispatch(getMenus());
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
