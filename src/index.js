import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store()}>
      <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
