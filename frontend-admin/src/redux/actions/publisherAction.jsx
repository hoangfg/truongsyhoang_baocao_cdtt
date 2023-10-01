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

export const insertPublisher = (publisher, navigate) => async (dispatch) => {
  const service = new publisherService();
  console.log("object", service);
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });

    const response = await service.create(publisher);

    if (response.status === 201) {
      dispatch({
        type: PUBLISHER_SET,
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
  navigate("/publishers");
};
export const updatePublisher =
  (id, publisher, navigate) => async (dispatch) => {
    const service = new publisherService();
    try {
      dispatch({
        type: COMMON_LOADING_SET,
        payload: true,
      });

      const response = await service.update(id, publisher);

      if (response.status === 201) {
        dispatch({
          type: PUBLISHER_SET,
          payload: response.data,
        });
        dispatch({
          type: COMMON_MESSAGE_SET,
          payload: "Cập nhật trạng thái thành công",
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
    navigate("/publishers");
  };
  export const getPublishers = () => async (dispatch) => {
    const service = new publisherService();
    try {
      dispatch({
        type: COMMON_LOADING_SET,
        payload: true,
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
      payload: false,
    });
  };
export const statusPublisher = (id, publisher) => async (dispatch) => {
  const service = new publisherService();
  try {
    // dispatch({
    //   type: COMMON_LOADING_SET,
    //   payload: true,
    // });

    const response = await service.status(id, publisher);

    if (response.status === 200) {
      dispatch({
        type: PUBLISHER_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật trang thái thành công",
      });
      dispatch(getPublishers());
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


export const deleteById = (id) => async (dispatch) => {
  const service = new publisherService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.deleteById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: PUBLISHER_DELETE,
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
export const clearState = () => (dispatch) => {
  dispatch({ type: PUBLISHERS_STATE_CLEAR });
};
export const clearPublisher = () => (dispatch) => {
  dispatch({
    type: PUBLISHER_SET,
    payload: { id: "", name: "", status: "visible" },
  });
};
