import { combineReducers } from "redux";
import publisherReducer from "./reducers/publisherReducer";
import commonReducer from "./reducers/commonReducer";
import authorReducer from "./reducers/authorReducer";
import bookGenresService from "./../services/bookGenresService";
import bookGenresReducer from "./reducers/bookGenresReducer";
import bookLanguageReducer from "./reducers/bookLanguageReducer";
import bookReducer from "./reducers/bookReducer";
import topicReducer from "./reducers/topicReducer";
import postReducer from "./reducers/postReducer";
import pageReducer from "./reducers/pageReducer";
import configReducer from "./reducers/configReducer";
import sliderReducer from "./reducers/sliderReducer";
import storeReducer from "./reducers/storeReducer";
import menuReducer from "./reducers/menuReducer";
import roleReducer from "./reducers/roleReducer";
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
const rootReducer = combineReducers({
  publisherReducer,
  commonReducer,
  authorReducer,
  bookGenresReducer,
  bookLanguageReducer,
  bookReducer,
  topicReducer,
  postReducer,
  pageReducer,
  configReducer,
  sliderReducer,
  storeReducer,
  menuReducer,
  roleReducer,
  userReducer,
  orderReducer,
});
export default rootReducer;
