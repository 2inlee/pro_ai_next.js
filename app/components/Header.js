'use client';
import React, { useEffect , useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Initialize Bootstrap's JavaScript components
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('active');
    });

    // Add your additional JavaScript customization here if needed

    // Cleanup function
    return () => {
      // Destroy Bootstrap's JavaScript components
      $('.navbar-toggler').off('click');
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          wevement
        </Link>
        {isClient && (
          <>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/docs">
                문서
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/expert">
                전문가
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                로그인
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/signup">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
        </>
        )}
      </div>
    </nav>
  );
};

export default Header;
