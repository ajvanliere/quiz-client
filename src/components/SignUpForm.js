import React from 'react';

export default function SignUpForm(props) {

  return (
    <div>
        <form className="flex-form" onSubmit={props.onSubmit}>
        <h4>Or sign up here</h4>
            <input name="name" type="text" placeholder="Your name" value={props.values.name} onChange={props.onChange} />
            <input name="email" type="text" placeholder="Your email" value={props.values.email} onChange={props.onChange} />
            <input name="password" type="text" placeholder="Choose password" value={props.values.password} onChange={props.onChange} />
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}