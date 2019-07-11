import React from 'react';
import '../App.css';

export default function Question(props) {
  let answers = props.question.incorrect_answers

  if (!answers.includes(props.question.correct_answer)) {
    answers.push(props.question.correct_answer)
  }

  function shuffle(answers) {
    var random = answers.length, temp, index;

    while (random > 0) {
      index = Math.floor(Math.random() * random);
      random--;
      temp = answers[random];
      answers[random] = answers[index];
      answers[index] = temp;
    }
    return answers;
  }

  return (
    <div key="index">
      <form name='form1' className="flex-form" onSubmit={props.onSubmit}>
        <h1>{props.question.question}</h1>
        {shuffle(answers).map(answer =>
          <label><input type="radio" name={props.question.question} value={answer} onChange={props.onChange} required />
            {answer}
          </label>
        )}
        <button className="next">
          Next Question
        </button>
      </form>
    </div>
  )
}