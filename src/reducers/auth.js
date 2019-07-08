import { CREATE_USER_SUCCESS } from '../actions/user';

const initialState = {}

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.user
   
    default:
      return state
  }
}

export default user;