import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="welcome">
          <h1 className="h3 mb-3 font-weight-normal">Welcome!</h1>
          <a className="btn btn-lg btn-primary btn-block mt-4" href="/login">
            Login
          </a>
          <a className="btn btn-lg btn-primary btn-block mt-4" href="/register">
            Register
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
