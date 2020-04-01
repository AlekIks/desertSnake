import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import './index.css'
import App from './App'
import reducer from './reducers'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render((
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
), document.getElementById('root'));