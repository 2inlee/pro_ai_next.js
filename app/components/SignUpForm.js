'use client';
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [user, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        name,
        email,
        password,
        confirm_password: confirmPassword
      };

      // Send the POST request to the server using axios
      const response = await axios.post('http://localhost:5001/signup', formData);

      console.log(response.data);
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            value={user}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
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
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
