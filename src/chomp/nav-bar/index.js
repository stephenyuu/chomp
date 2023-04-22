import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const NavBar = ({ activeLink }) => {

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);

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
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              <Link
                  className={`nav-link ${
                    activeLink === "" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
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
                  </Link>)}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
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
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
