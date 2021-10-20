import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import '../commonstyles/Header.css';
import Cookies from 'js-cookie';
interface Props{}
interface State{
  token: any;
}



const Header = (props: any) => {
  const state:State = {
    token: Cookies.get("Authorization")
  };
  // const handleLogin =() =>
  // {
    // console.log("cookie1:",state.token);
    state.token = Cookies.get("Authorization");
    // console.log("cookie2:",state.token);
    const handleLogOut = () =>
    {
      Cookies.remove("Authorization");
      state.token = Cookies.get("Authorization");
    }
  return (
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
    {
      !state.token?
      (
      <>
    <Link to="/sign-in" className="nav-item">
          Sign-in
    </Link>
    <Link to="/sign-up" className="nav-item">
          Sign-up
    </Link>
    </>
    ):(
    <Link to="/sign-in" className="nav-item" onClick = {handleLogOut}>
          Sign Out
    </Link>
      )}
  </div>
  )};

export default Header;
