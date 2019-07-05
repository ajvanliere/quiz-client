import { LOGIN_SUCCESS_USER } from '../actions/auth';

const user = (state = null, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS_USER: {
      return action.user
    }
    default:
      return state
  }
}

export default user;