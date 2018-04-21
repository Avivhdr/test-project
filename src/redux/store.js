// import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { locationsReducer } from './locationReducer';
import { performanceReducer } from '../components/performance/performance.reducer';

export const rootReducer = combineReducers({
  locations: locationsReducer,
  form: formReducer,
  performance: performanceReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;