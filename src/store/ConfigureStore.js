import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)));
}
