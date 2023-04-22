import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { findUserByUsernameThunk } from "../../services/users/users-thunk";
import { Dispatch } from "react";
import { Collapse } from "bootstrap";

const NavBar = ({ activeLink }) => {
  const { currentUser } = useSelector((state) => state.users);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CHOMP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse collapse ${showMenu ? "show" : "collapse"}`} id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === "" ? "active" : ""}`}
                  to="/"
                >
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "searchRxs" ? "active" : ""
                  }`}
                  to="/searchRxs"
                >
                  Restaurant Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "userSearch" ? "active" : ""
                  }`}
                  to="/userSearch"
                >
                  User Search
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
              </li>
            </ul>
            <div>
              <div className="nav-item">
                {currentUser ? (
                  <Link
                    className={`nav-link ${
                      activeLink === "profile" ? "active" : ""
                    }`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                ) : (
                  <Link
                    className={`nav-link ${
                      activeLink === "login" ? "active" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
