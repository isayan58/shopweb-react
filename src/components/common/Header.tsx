import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import '../commonstyles/Header.css';
import { actionTypes } from '/Users/sayanadhikary/Desktop/ReactDev/webshop/src/Store/actionTypes';
import {State} from '/Users/sayanadhikary/Desktop/ReactDev/webshop/src/Store/rootReducer';
import Cookies from 'js-cookie';
import { logout } from '../../Store/actionCreators';
import shopReducer from '../../Store/shopReducer';
interface Props{}

  const Header = (props: any) => {
  const shopping = useSelector((state: State) => state.shopping);
  const dispatch = useDispatch();
    const handleLogOut = () =>
    {
      Cookies.remove("Authorization");
      dispatch(logout());
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
      (shopping.authToken==="")?
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
    <Link to="/sign-in" className="nav-item" onClick={handleLogOut}>
          Sign Out
    </Link>
      )}
  </div>
  )};

export default Header;