import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {compose, applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux'

const store = createStore(rootReducer,compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
      </React.StrictMode>
    </Provider>

);

