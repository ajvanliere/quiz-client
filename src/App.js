import React, { Component } from 'react';
import './App.css';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import LoginFormContainer from './components/LoginFormContainer';
import SignUpFormContainer from './components/SignUpFormContainer';
import SelectorFormContainer from './components/SelectorFormContainer';
import QuestionContainer from './components/QuestionContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <div className="App">
            <Route exact path="/" component={LoginFormContainer} />
            <Route exact path="/" component={SignUpFormContainer} />
            <Route exact path="/quiz" component={SelectorFormContainer} />
            <Route exact path="/questions" component={QuestionContainer} />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;