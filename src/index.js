import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
// import {loadState, saveState} from './localStorage';
import thunk from 'redux-thunk';



// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
    applyMiddleware(thunk)
  )
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
