import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { registerUser } from '../actions/user';

class SignUpFormContainer extends React.Component {
  state = { name: '', email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    window.location = "/lobby";
    this.props.registerUser(this.state)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
      </div>
    )
  }
}

export default connect(null, { registerUser })(SignUpFormContainer)