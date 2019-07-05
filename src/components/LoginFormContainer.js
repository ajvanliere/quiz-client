import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/auth';
import LoginForm from './LoginForm';

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' }
  redirect = false;

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
    this.redirect = true;
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderRedirect = () => {
    if (this.redirect) {
      return (
        <div>You are now logged in</div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
      </div>
    )
  }
}

export default connect(null, { login })(LoginFormContainer)