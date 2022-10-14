import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './Components/App';

import rootReducer from './reducers'; 
import { act } from 'react-dom/test-utils';



// curried form of function logger(obj, next, action)
//redux internally logger(obj)(next)(action)

// const logger = function( {dispatch, getstate} ){
//     return function(next){
//         return function(action){
//             //midleware code
//             console.log('ACTION_TYPE', action.type)
//             next(action);
//         }
//     }
// }


const logger = ({dispatch, getstate}) => (next) => (action) =>{
    //logger code
    console.log('ACTION_TYPE', action.type)
    next(action);
}


const store = createStore(rootReducer, applyMiddleware(logger)); // rootReducer from reducers

// console.log('store', store);     
// console.log('State', store.getState()); 

ReactDOM.render(<App store = {store} />,document.getElementById('root'));