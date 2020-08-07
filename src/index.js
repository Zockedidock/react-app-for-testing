import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
//import Home from './Router/Home'
//import Login from './Router/Login';
//import Register from './Router/Register';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  /*
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>,
  
  <Router>
    <Route path="/" component={App}>

    </Route>
    <Route path="/login" exact component={Login}>

    </Route>
    <Route path="/register" exact component={Register}>

    </Route>

  </Router>
  */
  <HashRouter>
    <App />
  </HashRouter>
  ,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
