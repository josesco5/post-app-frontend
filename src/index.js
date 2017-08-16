import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { fetchPosts } from './actions/postsActionCreators';
import rootReducer from './reducers/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(fetchPosts(''));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
