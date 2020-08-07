import React from 'react';
import './css/App.css';
import Home from './Router/Home'
import Login from './Router/Login'
import Register from './Router/Register'
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="Router">
      <Route path="/" exact component={Home}>

      </Route>
      <Route path="/login/" component={Login}>

      </Route>
      <Route path="/register/" component={Register}>

      </Route>
    </div>
  );
}

export default App;
