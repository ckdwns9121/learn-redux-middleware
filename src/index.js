import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';

const customHistory = createBrowserHistory();
const store = createStore(rootReducer,
  applyMiddleware(ReduxThunk.withExtraArgument({history:customHistory}),logger));

// const store = createStore(rootReducer);
ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
