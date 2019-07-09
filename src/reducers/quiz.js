import { LOAD_QUIZ } from '../actions/quiz';

const loadQuestions = (state = null, action = {}) => {
  switch (action.type) {
    case LOAD_QUIZ: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default loadQuestions;