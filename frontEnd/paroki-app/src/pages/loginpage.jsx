import React, { useState } from 'react';
import axios from "axios";
import "../Styling/Loginpage.css"
import { useSignIn } from 'react-auth-kit';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const values={
      username: username,
      password: password
    };

    try{
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        values
      )
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer"
      });
      setUsername('');
      setPassword('');
      setError(''); // Clear error if login is successful
      navigate('/'); // Navigate to the home page
      
    } catch (err){
      console.error();
      setError('Username atau password salah !!!');
    }

    setUsername('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-popup">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <div className="password-container">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button type="button" onClick={()=>console.log()} className='hide'>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;