import {
  GENRES_SET,
  GENRE_APPEND,
  GENRE_DELETE,
  GENRE_SET,
  GENRE_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  genre: {},
  genres: [],
};

const bookGenresReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GENRE_SET:
      return { ...state, genre: payload }; // Updated to set 'genre' instead of 'genres'
    case GENRES_SET:
      return { ...state, genres: payload }; // Corrected the property name to 'genres'
    case GENRE_APPEND:
      return { ...state, genres: [payload, ...state.genres] }; // Corrected the property name to 'genres'
    case GENRE_DELETE:
      return {
        ...state,
        genres: state.genres.filter((item) => item.id !== payload), // Corrected the property name to 'genres'
      };
    case GENRE_UPDATE:
      const updatedGenres = state.genres.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        genres: updatedGenres,
      };
    default:
      return state;
  }
};

export default bookGenresReducer;
