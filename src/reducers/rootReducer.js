import { combineReducers } from 'redux';
import gameBoardReducer from './gameBoardReducer';
export default combineReducers({
	gameBoardMatrix: gameBoardReducer,
});
