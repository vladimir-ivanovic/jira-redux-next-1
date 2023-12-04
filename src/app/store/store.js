import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
//import { configureStore  } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
//const store = configureStore(rootReducer);

export default store;