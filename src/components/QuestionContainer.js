import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import { checkAnswer } from '../actions/answer';

class QuestionContainer extends React.Component {
  questionIndex = 0;
  state = '';

  onSubmit = (event) => {
    event.preventDefault()

    let submittedAnswer = this.state[this.props.loadQuestions[this.questionIndex].question];
    let correctAnswer = this.props.loadQuestions[this.questionIndex].correct_answer;

    this.props.checkAnswer(submittedAnswer, correctAnswer);

    // Go to next question and clear selected radio button
    this.setState({
      question: this.questionIndex += 1
    });
    let r = document.getElementsByTagName('input');
    for (let i = 0; i < r.length; i++) {
      if (r[i].type === 'radio') {
        r[i].checked = false;
      }
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderFeedback = () => {
    let submittedAnswer = this.state[this.props.loadQuestions[this.questionIndex].question];
    let correctAnswer = this.props.loadQuestions[this.questionIndex].correct_answer;

    if (submittedAnswer && submittedAnswer === correctAnswer) {
      return 'You are right'
    } else {
      return `You are wrong. The right answer is ${correctAnswer}`
    }
  }

  render() {
    return (
      <div>
        {this.renderFeedback()}
        <Question question={this.props.loadQuestions && this.props.loadQuestions[this.questionIndex]}
          onSubmit={this.onSubmit} onChange={this.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loadQuestions: state.loadQuestions,
  answerResult: state.answerResult
})

export default connect(mapStateToProps, { checkAnswer })(QuestionContainer)