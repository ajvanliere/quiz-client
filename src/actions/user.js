import request from 'superagent';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const baseUrl = 'http://localhost:4000';

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