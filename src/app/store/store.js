import { createStore } from 'redux';
//import { configureStore  } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = createStore(rootReducer);
//const store = configureStore(rootReducer);

export default store;