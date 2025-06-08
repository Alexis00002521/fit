import React from 'react';
import '../styles/Login.css';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="login-form">
        <h2 className= "textLabel" >Iniciar Sesión</h2>
        <form>
          <label className= "textLabel" htmlFor="email">Email*</label >
          <input  className= "back" type="email" id="email" required />

          <label className= "textLabel" htmlFor="password">Password*</label>
          <input className= "back" type="password" id="password" required />

          <div className="options">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="textLabel">Recordarme</label>
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          <button className= "bt" type="submit">Login</button>
        </form>
      </div>
      <div className="logo-section">
        <img src='/MainLogo.png' alt="Stamina Fitness Logo" />
      </div>
    </div>
  );
};

export default Login;

