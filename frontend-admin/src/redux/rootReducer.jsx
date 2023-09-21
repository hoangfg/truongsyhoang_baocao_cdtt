import { combineReducers } from "redux"
import publisherReducer from './reducers/publisherReducer';
import commonReducer from './reducers/commonReducer';
import authorReducer from './reducers/authorReducer';
const rootReducer = combineReducers({
  publisherReducer,
  commonReducer,
  authorReducer,
});
export default rootReducer;