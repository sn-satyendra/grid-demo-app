import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  // Although thunk is not needed for this simple use case, somehow the non pure operations should be moved out from
  // reducer. 
  // TODO: Think of a way to do this.
  return createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)));
}
