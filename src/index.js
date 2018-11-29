import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
const firebaseconfig = {
  apiKey: "AIzaSyDIv3XCeUNHSpsJEs6Shn9eNfUoWkuPwh0",
  authDomain: "followproject-48686.firebaseapp.com",
  databaseURL: "https://followproject-48686.firebaseio.com",
  projectId: "followproject-48686",
  storageBucket: "followproject-48686.appspot.com",
  messagingSenderId: "115694397365"
  };
  firebase.initializeApp(firebaseconfig);
ReactDOM.render(<App />, document.getElementById('root'));
