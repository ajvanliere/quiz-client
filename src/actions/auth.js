import request from 'superagent';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER';

const baseUrl = 'http://localhost:4000';

const loginSuccess = jwt => ({
  type: LOGIN_SUCCESS,
  jwt
});

const loginSuccessUser = user => ({
  type: LOGIN_SUCCESS_USER,
  user
});

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: email, password: password })
    .then(response => {
      dispatch(loginSuccess(response.body.jwt))
      dispatch(loginSuccessUser(response.body.user))
    })
    .catch(console.error)
};