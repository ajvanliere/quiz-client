import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
);

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
// persistor.purge()