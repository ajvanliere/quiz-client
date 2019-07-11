import { ANSWER_RESULT } from '../actions/answer';

const initialState = {}

const answerResult = (state = initialState, action) => {
  console.log('action:', action.payload)
  switch (action.type) {
    case ANSWER_RESULT:
      return action.payload

    default:
      return state
  }
}

export default answerResult;