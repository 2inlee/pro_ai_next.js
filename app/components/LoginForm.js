'use client';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';


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
        alert('로그인이 성공적으로 완료되었습니다.');
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        Cookies.set('accessToken', accessToken, { expires: expirationDate });
      } else {
        alert('Login Fail');
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the login process
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
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
              <div className="text-end">
                <button type="submit" className="btn btn-primary">로그인</button>
              </div>
              <div className="text-center">
                <p>아직 회원이 아니신가요?<Link href="/signup" className="btn btn-link">회원가입</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default LoginForm;
