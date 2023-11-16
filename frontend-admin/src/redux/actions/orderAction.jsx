import orderService from "../../services/orderService";
import {
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  ORDERS_SET,
  ORDER_APPEND,
  ORDER_DELETE,
  ORDER_SET,
  ORDER_UPDATE,
} from "./actionTypes";

export const insertOrder = (order) => async (dispatch) => {
  const service = new orderService();

  try {
    const response = await service.create(order);
    console.log(order);
    console.log("19", response);
    if (response.status === 201) {
      console.log("yes", response);
      dispatch({
        type: ORDER_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
      dispatch({
        type: ORDER_APPEND,
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
export const getOrders = () => async (dispatch) => {
  const service = new orderService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getOrders();
    console.log("repon ", response.status);
    console.log("order", response.status);
    if (response.status === 200) {
      dispatch({
        type: ORDERS_SET,
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
  const service = new orderService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.deleteById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: ORDER_DELETE,
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
  const service = new orderService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: ORDER_SET,
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
export const updateOrder = (order) => async (dispatch) => {
  const service = new orderService();
  try {
    const { id } = order;
    const response = await service.update(id, order);

    if (response.status === 201) {
      dispatch({
        type: ORDER_SET,
        payload: response.data,
      });
      dispatch({
        type: ORDER_UPDATE,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật thành công",
      });
      dispatch(getOrders);
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
export const statusOrder = (id, order) => async (dispatch) => {
  const service = new orderService();
  console.log(order);
  try {
    // dispatch({
    //   type: COMMON_LOADING_SET,
    //   payload: true,
    // });

    const response = await service.status(id, order);

    if (response.status === 200) {
      dispatch({
        type: ORDER_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật trang thái thành công",
      });
      dispatch(getOrders());
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
