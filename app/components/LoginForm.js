'use client';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { setAccessTokenCookie } from './Auth'; // Adjust the import path based on your file structure


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password
    };
  
    try {
      const response = await axios.post('http://localhost:5001/login', formData);
  
      if (response.data.result === 'success') {
        alert('Login completed successfully.');

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        const accessToken = response.data.access_token; // Extract the access token from the server response
        setAccessTokenCookie(accessToken); // Store access token in cookie
        console.log(accessToken);
        alert(accessToken);
        window.location.href = '/'; // Redirect to the home page
      } else {
        alert('Login Failed');
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the login process
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center" style={{ padding: '15px' }}>
        <div className="col-md-4">
          <div className="text-center mb-4">
            <img src="/img/wevement_logo.png" alt="Wevement Logo" className="logo" />
          </div>
          <div className="box-container">
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div style={{ margin: '10px' }}></div>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">Log in</button>
              </div>
              <div className="text-center mt-3">
                <p>Not yet a member? <Link href="/signup" className="btn btn-link">Sign up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
