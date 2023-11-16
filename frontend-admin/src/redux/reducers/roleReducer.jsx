import {
  ROLES_SET,
  ROLE_APPEND,
  ROLE_DELETE,
  ROLE_SET,
  ROLE_UPDATE,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  role: {},
  roles: [],
};

const roleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ROLE_SET:
      return { ...state, role: payload };
    case ROLES_SET:
      return { ...state, roles: payload };
    case ROLE_APPEND:
      return { ...state, roles: [payload, ...state.roles] };
    case ROLE_DELETE:
      return {
        ...state,
        roles: state.roles.filter((item) => item.id !== payload),
      };
    case ROLE_UPDATE:
      const newRole = state.roles.filter((item) => item.id !== payload.id)
      return {
        ...state,
        roles: [payload, ...newRole]
      };

    default:
      return state;
  }
};
export default roleReducer;
