import {
  MENUS_SET,
  MENU_APPEND,
  MENU_DELETE,
  MENU_SET,
  MENU_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  menu: {},
  menus: [],
};
const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MENU_SET:
      return { ...state, menu: payload };
    case MENUS_SET:
      return { ...state, menus: payload };
    case MENU_APPEND:
      return { ...state, menus: [payload, ...state.menus] };
    case MENU_DELETE:
      return {
        ...state,
        menus: state.menus.filter((item) => item.id !== payload),
      };
    case MENU_UPDATE:
      const updatedMenus = state.menus.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        menus: updatedMenus,
      };
    default:
      return state;
  }
};

export default menuReducer;
