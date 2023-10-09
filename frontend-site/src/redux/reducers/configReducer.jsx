import {
  CONFIGS_SET,
  CONFIG_APPEND,
  CONFIG_DELETE,
  CONFIG_SET,
  CONFIG_UPDATE,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  config: {},
  configs: [],
};

const configReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONFIG_SET:
      return { ...state, config: payload };
    case CONFIGS_SET:
      return { ...state, configs: payload };
    case CONFIG_APPEND:
      return { ...state, configs: [payload, ...state.configs] };
    case CONFIG_DELETE:
      return {
        ...state,
        configs: state.configs.filter((item) => item.id !== payload),
      };
    case CONFIG_UPDATE:
      const newConfig = state.configs.filter((item) => item.id !== payload.id);
      return {
        ...state,
        configs: [payload, ...newConfig],
      };

    default:
      return state;
  }
};
export default configReducer;
