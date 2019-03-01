import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const Store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger,
        thunk
      ),
    ),
  )
 
  return Store
}
