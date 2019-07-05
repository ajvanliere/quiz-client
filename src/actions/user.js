import request from 'superagent';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const baseUrl = 'http://localhost:4000';

const createUserSuccess = currentUser => ({
  type: CREATE_USER_SUCCESS,
  currentUser
});

export const createUser = (data) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      dispatch(createUserSuccess(response.body))
    })
    .catch(console.error)
};