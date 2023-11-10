import {
  POSTS_SET,
  POST_APPEND,
  POST_DELETE,
  POST_SET,
  POST_UPDATE,
  POSTS_LOADING_SET,
} from "../actions/actionTypes";

// rxreducer
const initialState = {
  post: {},
  posts: [],
  isLoading: false,
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SET:
      return { ...state, post: payload };
    case POSTS_SET:
      return { ...state, posts: payload };
    case POSTS_LOADING_SET:
      return { ...state, isLoading: payload };
    case POST_APPEND:
      return { ...state, posts: [payload, ...state.posts] };
    case POST_DELETE:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== payload),
      };
    case POST_UPDATE:
      const newAuthor = state.posts.filter((item) => item.id !== payload.id);
      return {
        ...state,
        posts: [payload, ...newAuthor],
      };

    default:
      return state;
  }
};
export default postReducer;
