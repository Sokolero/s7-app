import React, { useEffect } from "react";
import  { useDispatch } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";

import { getUsers } from "./redux/actions";
import './App.css';

const setNavLinkClass = ({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link";

/* ============================================================================ */
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('1')
    dispatch(getUsers());
  }, [dispatch, getUsers])

  return (
      <div className="App">
        <div className="header__wrapper">
          <header className="header">
            <span className="logo">Logo</span>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink to="/" className={ setNavLinkClass }>Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="users/" className={ setNavLinkClass }>Users</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="profile/" className={ setNavLinkClass }>Profile</NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <main className="main">
          <Outlet />
        </main>
        <div className="footer__wrapper">
          <footer className="footer">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink to="/" className="nav__link">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="users/" className="nav__link">Users</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="profile/" className="nav__link">Profile</NavLink>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
  );
}

export default App;
