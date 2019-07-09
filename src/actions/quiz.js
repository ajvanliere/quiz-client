import request from 'superagent';

export const LOAD_QUIZ = 'LOAD_QUIZ';

const loadQuiz = questions => ({
  type: LOAD_QUIZ,
  payload: questions
});

export const quiz = (category, difficulty) => dispatch => {
  request
    .get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(response => {
      // console.log('response:', response.body.results[0])
      dispatch(loadQuiz(response.body.results))
    })
    .catch(console.error)
};