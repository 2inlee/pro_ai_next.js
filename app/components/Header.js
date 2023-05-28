'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { isAuthenticated, removeAccessTokenCookie } from './Auth'; // Import the authentication functions

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInState = isAuthenticated(); // Check if the user is authenticated
    setIsLoggedIn(loggedInState);
  }, []);

  const handleLogout = () => {
    removeAccessTokenCookie(); // Remove the access token from the cookie
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Initialize Bootstrap's JavaScript components
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('active');
    });

    // Cleanup function
    return () => {
      // Destroy Bootstrap's JavaScript components
      $('.navbar-toggler').off('click');
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid header-container">
        <Link className="navbar-brand" href="/">
          <img
            src="/img/wevement_logo_simbol_only.png"
            alt="logo"
            width="45"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                <span className="header-link">질문 홈</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/docs">
                <span className="header-link">서비스 소개</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/expert">
                <span className="header-link">전문가 설문</span>
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={handleLogout}>
                  <span className="header-link">로그아웃</span>
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  <span className="header-link">로그인</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
