'use client';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert('Login Success!!')
      } else {
        alert('Login Fail!!')
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the login process
    }
  };

  return (
    <div className="container mt-5">
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
