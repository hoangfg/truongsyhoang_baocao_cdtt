import {
  LANGUAGES_SET,
  LANGUAGES_STATE_CLEAR,
  LANGUAGE_APPEND,
  LANGUAGE_DELETE,
  LANGUAGE_SET,
  LANGUAGE_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  language: {},
  languages: [],
};

const bookLanguageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LANGUAGE_SET:
      return { ...state, language: payload }; // Updated to set 'language' instead of 'languages'
    case LANGUAGES_SET:
      return { ...state, languages: payload }; // Corrected the property name to 'languages'
    case LANGUAGE_APPEND:
      return { ...state, languages: [payload, ...state.languages] }; // Corrected the property name to 'languages'
    case LANGUAGE_DELETE:
      return {
        ...state,
        languages: state.languages.filter((item) => item.id !== payload), // Corrected the property name to 'languages'
      };
    case LANGUAGE_UPDATE:
      const updatedGenres = state.languages.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        languages: updatedGenres,
      };
    case LANGUAGES_STATE_CLEAR:
      return { language: {}, languages: [] };
    default:
      return state;
  }
};

export default bookLanguageReducer;
