import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/auth';

export const loginStatus = (state = null, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return action.payload;
    }
    case LOGIN_FAILURE: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default loginStatus;