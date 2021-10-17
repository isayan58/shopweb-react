import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../commonstyles/Header.css';

const Header = () => (
  <div className="top-nav">
    <Link className="nav-item" to="/">
      Home
    </Link>
    <Link className="nav-item" to="/about">
      About
    </Link>
    <Link className="nav-item" to="/contact">
      Contact
    </Link>
    <Link to="/sign-in" className="nav-item">
          Sign-in
    </Link>
    <Link to="/sign-up" className="nav-item">
          Sign-up
    </Link>
  </div>
);

export default Header;
