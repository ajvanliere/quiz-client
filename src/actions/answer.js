// import request from 'superagent';
// import baseUrl from '../config';

export const ANSWER_RESULT = 'ANSWER_RESULT';

const answerResult = submittedAnswer => ({
  type: ANSWER_RESULT,
  payload: submittedAnswer
});

export const checkAnswer = (submittedAnswer, correctAnswer) => dispatch => {
  console.log('subAnswer:', submittedAnswer, 'correctAnswer:', correctAnswer)
  if (submittedAnswer && submittedAnswer === correctAnswer) {
    dispatch(answerResult('You are right'))
  } else {
    dispatch(answerResult(`You are wrong. The right answer is ${correctAnswer}`))
  }


  // request
  //   .post(`${baseUrl}/scores`)
  //   .send({ answer: submittedAnswer, answerResult: correctAnswer })
  //   .then(response => {
  //     if (submittedAnswer && submittedAnswer === correctAnswer) {
  //       dispatch(answerResult('You are right'))
  //     } else {
  //       dispatch(answerResult('You are wrong'))
  //     }
  //   })
  //   .catch(console.error)
}
