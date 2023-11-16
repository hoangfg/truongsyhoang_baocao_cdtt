import {
  USERS_SET,
  USER_APPEND,
  USER_DELETE,
  USER_SET,
  USER_UPDATE,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  user: {},
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SET:
      return { ...state, user: payload };
    case USERS_SET:
      return { ...state, users: payload };
    case USER_APPEND:
      return { ...state, users: [payload, ...state.users] };
    case USER_DELETE:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };
    case USER_UPDATE:
      const newUser = state.users.filter((item) => item.id !== payload.id);
      return {
        ...state,
        users: [payload, ...newUser],
      };

    default:
      return state;
  }
};
export default userReducer;
