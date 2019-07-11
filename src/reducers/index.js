import { combineReducers } from 'redux';
import loginStatus from './user';
import loadQuestions from './quiz';
import answerResult from './answer';

export default combineReducers({
  loginStatus,
  loadQuestions,
  answerResult
});
