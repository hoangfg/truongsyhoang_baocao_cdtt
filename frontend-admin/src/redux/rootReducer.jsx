import { combineReducers } from "redux";
import publisherReducer from "./reducers/publisherReducer";
import commonReducer from "./reducers/commonReducer";
import authorReducer from "./reducers/authorReducer";
import bookGenresService from "./../services/bookGenresService";
import bookGenresReducer from "./reducers/bookGenresReducer";
import bookLanguageReducer from "./reducers/bookLanguageReducer";
import bookReducer from "./reducers/bookReducer";
const rootReducer = combineReducers({
  publisherReducer,
  commonReducer,
  authorReducer,
  bookGenresReducer,
  bookLanguageReducer,
  bookReducer,
});
export default rootReducer;
