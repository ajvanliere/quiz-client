import React from 'react';
import '../App.css';

export default function LoginForm(props) {
  
  return (
    <div>
        <form className="flex-form" onSubmit={props.onSubmit}>
          <h4>Login if you already signed up</h4>
            <input name="email" type="email" placeholder="email@mydomain.com" required value={props.values.email} onChange={props.onChange} />
            <input name="password" type="password" placeholder="password" required value={props.values.password} onChange={props.onChange} />
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}