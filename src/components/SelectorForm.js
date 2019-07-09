import React from 'react';
import '../App.css';

export default function SelectorForm(props) {

  return (
    <div>
      <form className="flex-form" onSubmit={props.onSubmit}>

        <h4>Select your level of difficulty</h4>
        <div className="radio">
          <label>
            <input type="radio" name="difficulty" value="easy" onChange={props.onChange} />
            Easy
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="difficulty" value="medium" onChange={props.onChange} />
            Medium
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="difficulty" value="hard" onChange={props.onChange} />
            Hard
          </label>
        </div>

        <h4>Select your category</h4>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="9" onChange={props.onChange} />
            Category 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="10" onChange={props.onChange} />
            Category 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="11" onChange={props.onChange} />
            Category 3
          </label>
        </div>

        <button type="submit">GO TO QUESTIONS!</button>

      </form>
    </div>
  )
}