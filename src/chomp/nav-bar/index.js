import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logoutThunk } from "../../services/users/users-thunk";

const NavBar = ({ activeLink }) => {
  const { currentUser } = useSelector((state) => state.users);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
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
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse collapse ${
              showMenu ? "show" : "collapse"
            }`}
            id="navbarColor01"
          >
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
            </ul>
            <div>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  {currentUser ? (
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        onClick={toggleDropdown}
                        role="button"
                        aria-haspopup="true"
                      >
                        {currentUser.username}
                      </a>
                      <div
                        className={`dropdown-menu dropdown-menu-end ${
                          showDropdown ? "show" : ""
                        }`}
                        data-bs-popper="static"
                      >
                        {" "}
                        <Link className="dropdown-item" to="/favorites">
                          Favorites
                        </Link>
                        <Link className="dropdown-item" to="/userSettings">
                          Settings
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link
                          className="dropdown-item"
                          to="/login"
                          onClick={() => logout()}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
