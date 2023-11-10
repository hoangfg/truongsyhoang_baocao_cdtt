import {
  TOPICS_LOADING_SET,
  TOPICS_SET,
  TOPIC_APPEND,
  TOPIC_DELETE,
  TOPIC_SET,
  TOPIC_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  topic: {},
  topics: [],
  isLoading: false,
};
const topicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOPIC_SET:
      return { ...state, topic: payload };
    case TOPICS_SET:
      return { ...state, topics: payload };
    case TOPICS_LOADING_SET:
      return { ...state, isLoading: payload };
    case TOPIC_APPEND:
      return { ...state, topics: [payload, ...state.topics] };
    case TOPIC_DELETE:
      return {
        ...state,
        topics: state.topics.filter((item) => item.id !== payload),
      };
    case TOPIC_UPDATE:
      const updatedTopics = state.topics.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        topics: updatedTopics,
      };
    default:
      return state;
  }
};

export default topicReducer;
