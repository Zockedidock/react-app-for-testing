import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

function Register() {
  return (
    <div className="Register">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="login">
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
          
          <input placeholder="Email adress" type="email" id="inputEmailRegister" className="form-control mb-2" required autoFocus/>
          
          <input placeholder="Password" type="password" id="inputPasswordRegister" className="form-control mb-2" required/>

          <p className="registerLogin">Already registered?  <a href="/#/login" textDecoration="none">Login</a></p>

          <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">
            Register
          </button>
        </div>
      </header>
    </div>
  );
}

export default Register;