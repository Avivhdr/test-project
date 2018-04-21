import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { rootReducer } from './redux/store';
// import Performance from './components/performance/index';


import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store} key="provider">
    {/* <Performance /> */}
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
