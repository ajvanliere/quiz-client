import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    if (this.redirect && this.props.loginStatus && this.props.loginStatus.success === true) {
      return (
        <Redirect to='/quiz' />
      )
    } else if(this.redirect && this.props.loginStatus && this.props.loginStatus.success === false) {
      return (
        <div>{this.props.loginStatus.message} Please try again or register below.</div>
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

const mapStateToProps = state => ({
  loginStatus: state.loginStatus
})

export default connect(mapStateToProps, { login })(LoginFormContainer)