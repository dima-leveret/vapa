import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import firebase from 'firebase';

import { store } from './store';



const firebaseConfig = {
    apiKey: "",
    authDomain: "dima-leveret-vapa.firebaseapp.com",
    databaseURL: "https://dima-leveret-vapa-default-rtdb.firebaseio.com",
    projectId: "dima-leveret-vapa",
    storageBucket: "dima-leveret-vapa.appspot.com",
    messagingSenderId: "684473262422",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
