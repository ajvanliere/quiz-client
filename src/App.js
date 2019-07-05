import React, { Component } from 'react';
import './App.css';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import LoginFormContainer from './components/LoginFormContainer';

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
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;