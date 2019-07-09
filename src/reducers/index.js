import { combineReducers } from 'redux';
import loginStatus from './user';
import loadQuestions from './quiz';

export default combineReducers({
  loginStatus,
  loadQuestions
});
