'use client';
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        name,
        email,
        password,
      };

      // Send the POST request to the server using axios
      const response = await axios.post('http://localhost:5001/signup', formData);

      // json 형태로 'result':'success'를 받아오면 회원가입 성공
      if (response.data.result === 'success') {
        alert('회원가입이 성공적으로 완료되었습니다.');
      } else {
        alert('Signup Fail!!');
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the signup process
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="box-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
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
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">회원가입</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
