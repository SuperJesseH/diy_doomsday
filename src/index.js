import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import {loadState, saveState} from './localStorage';
import thunk from 'redux-thunk';


// const persistedState = loadState();
// const store = createStore(reducer, /*persistedState,*/
// compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ), applyMiddleware(thunk))
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
    applyMiddleware(thunk)
  )
)

// store.subscribe(()=> {
//   saveState(
//     // eg  auth: store.getState().token;
//     //ONLY REFRENCE THE STATE YOU WANT TO SAVE IN LOCAL STORE E.G. TOKEN
//     store.getState()
//   )
// })

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
