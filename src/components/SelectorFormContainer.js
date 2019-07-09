import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { quiz } from '../actions/quiz';
import SelectorForm from './SelectorForm';

class SelectorFormContainer extends React.Component {
  state = '';
  redirect = false;

  onSubmit = (event) => {
    event.preventDefault()
    this.props.quiz(this.state.category, this.state.difficulty)
    this.redirect = true;
    console.log('value:', this.state)
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderRedirect = () => {
    if (this.redirect) {
      return (
        <Redirect to='/questions' />
      )} else {
        return
      }    
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <SelectorForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loadQuestions: state.loadQuestions
})

export default connect(mapStateToProps, {quiz})(SelectorFormContainer)