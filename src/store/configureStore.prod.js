import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

module.exports = function configureStore(initialState, history) {
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

  return finalCreateStore(rootReducer, initialState);
};
