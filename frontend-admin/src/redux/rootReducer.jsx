import { combineReducers } from "redux"
import publisherReducer from './reducers/publisherReducer';
import commonReducer from './reducers/commonReducer';
const rootReducer = combineReducers({
  publisherReducer,
  commonReducer,
});
export default rootReducer;