import topicService from "../../services/topicService";
import {
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  TOPICS_SET,
  TOPIC_APPEND,
  TOPIC_DELETE,
  TOPIC_SET,
  TOPIC_UPDATE,
} from "./actionTypes";

export const insertTopics = (topic) => async (dispatch) => {
  const service = new topicService();

  try {
    console.log(topic);
    const response = await service.create(topic);
    console.log(response.data);
    if (response.status === 201) {
      console.log("yes", response);
      dispatch({
        type: TOPIC_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
      dispatch({
        type: TOPIC_APPEND,
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
export const getTopics = () => async (dispatch) => {
  const service = new topicService();
  console.log("se", service);
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: { isLoadingTopics: true },
    });
    const response = await service.getTopics();
    console.log("re", response);
    if (response.status === 200) {
      dispatch({
        type: TOPICS_SET,
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
    payload: { isLoadingTopics: false },
  });
};
export const deleteById = (id) => async (dispatch) => {
  const service = new topicService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.deleteById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: TOPIC_DELETE,
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
    payload: { isLoadingTopics: false },
  });
};
export const getById = (id) => async (dispatch) => {
  const service = new topicService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.getById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: TOPIC_SET,
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
export const updateTopics = (topic) => async (dispatch) => {
  console.log(topic);
  const service = new topicService();
  try {
    const { id } = topic;
    const response = await service.update(id, topic);

    if (response.status === 201) {
      dispatch({
        type: TOPIC_SET,
        payload: response.data,
      });
      dispatch({
        type: TOPIC_UPDATE,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật thành công",
      });
      dispatch(getTopics);
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
export const statusTopics = (id, topic) => async (dispatch) => {
  const service = new topicService();
  console.log(topic);
  try {
    // dispatch({
    //   type: COMMON_LOADING_SET,
    //   payload: true,
    // });

    const response = await service.status(id, topic);

    if (response.status === 200) {
      dispatch({
        type: TOPIC_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật trang thái thành công",
      });
      dispatch(getTopics());
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
