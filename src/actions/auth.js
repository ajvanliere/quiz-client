import request from 'superagent';
import baseUrl from '../config';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
});

const loginFailure = message => ({
  type: LOGIN_FAILURE,
  payload: message
});

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ login: email, password: password })
    .then(response => {
      if (response.body.success && response.body.success === true) {
        dispatch(loginSuccess(response.body))
      } else {
        dispatch(loginFailure(response.body))
      }
    })
    .catch(console.error)
};