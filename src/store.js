import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { LOGGED_IN } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

// const createStoreWithMiddleware = applyMiddleware(promise, thunk, loggerMiddleware)(createStore);
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(promise, thunk, loggerMiddleware)
));

const user = localStorage.getItem('userAuthToken');

if (user) {
    store.dispatch({ type: LOGGED_IN });
}

export default store;