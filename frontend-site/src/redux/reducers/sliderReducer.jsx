import {
  SLIDERS_SET,
  SLIDER_APPEND,
  SLIDER_DELETE,
  SLIDER_SET,
  SLIDER_UPDATE,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  slider: {},
  sliders: [],
};

const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SLIDER_SET:
      return { ...state, slider: payload };
    case SLIDERS_SET:
      return { ...state, sliders: payload };
    case SLIDER_APPEND:
      return { ...state, sliders: [payload, ...state.sliders] };
    case SLIDER_DELETE:
      return {
        ...state,
        sliders: state.sliders.filter((item) => item.id !== payload),
      };
    case SLIDER_UPDATE:
      const newSlider = state.sliders.filter((item) => item.id !== payload.id)
      return {
        ...state,
        sliders: [payload, ...newSlider]
      };

    default:
      return state;
  }
};
export default sliderReducer;
