import request from 'superagent';
import baseUrl from '../config';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const registerSuccess = currentUser => ({
  type: REGISTER_SUCCESS,
  currentUser
});

export const registerUser = (data) => dispatch => {
  request
    .post(`${baseUrl}/register`)
    .send(data)
    .then(response => {
      dispatch(registerSuccess(response.body))
    })
    .catch(console.error)
};