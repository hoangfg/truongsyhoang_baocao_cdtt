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

export const insertLanguage = (genres) => async (dispatch) => {
  const service = new bookLanguageService();

  try {
    const response = await service.create(genres);
    console.log(genres);
    console.log(response.data);
    if (response.status === 201) {
      console.log("yes", response);
      dispatch({
        type: LANGUAGE_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Thêm thành công",
      });
      dispatch({
        type: LANGUAGE_APPEND,
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
export const getLanguage = () => async (dispatch) => {
  const service = new bookLanguageService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
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
    payload: false,
  });
};
export const deleteById = (id) => async (dispatch) => {
  const service = new bookLanguageService();
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const response = await service.deleteById(id);
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: LANGUAGE_DELETE,
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
export const updateLanguage = (genres) => async (dispatch) => {
  console.log(genres);
  const service = new bookLanguageService();
  try {
    const { id } = genres;
    const response = await service.update(id, genres);

    if (response.status === 201) {
      dispatch({
        type: LANGUAGE_SET,
        payload: response.data,
      });
      dispatch({
        type: LANGUAGE_UPDATE,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Cập nhật thành công",
      });
      dispatch(getLanguage);
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
// export const statusLanguage = (id, genres) => async (dispatch) => {
//   const service = new bookLanguageService();
//   console.log(genres);
//   try {
//     // dispatch({
//     //   type: COMMON_LOADING_SET,
//     //   payload: true,
//     // });

//     const response = await service.status(id, genres);

//     if (response.status === 200) {
//       dispatch({
//         type: LANGUAGE_SET,
//         payload: response.data,
//       });
//       dispatch({
//         type: COMMON_MESSAGE_SET,
//         payload: "Cập nhật trang thái thành công",
//       });
//       dispatch(getLanguage());
//     } else {
//       dispatch({
//         type: COMMON_ERROR_SET,
//         payload: response.message,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: COMMON_ERROR_SET,
//       payload: error.response.data
//         ? error.response.data.message
//         : error.message,
//     });
//   } finally {
//     dispatch({
//       type: COMMON_LOADING_SET,
//       payload: false,
//     });
//   }
// };
export const clearLanguage = () => (dispatch) => {
  dispatch({
    type: LANGUAGE_SET,
    payload: { id: "", name: "", code: "" },
  });
};
