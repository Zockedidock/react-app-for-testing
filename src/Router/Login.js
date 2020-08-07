import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

function Login() {
  return (
    <div className="Login">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="login">
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          
          <input placeholder="Email adress" type="email" id="inputEmail" className="form-control mb-2" required autoFocus/>
          
          <input placeholder="Password" type="password" id="inputPassword" className="form-control mb-2" required/>

          <p className="registerLogin">Not Registered?  <a href="/register" textDecoration="none">Register</a></p>

          <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

export default Login;