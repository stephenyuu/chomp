import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


const NavBar = ({ activeLink }) => {

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);

  const handleLinkClick = (link) => {
    navigate(link);
  };

  console.log(currentUser)

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
              <a
                  className={`nav-link ${
                    activeLink === "" ? "active" : ""
                  }`}
                  href="/"
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
              {currentUser ? (
                  <a
                    className={`nav-link ${
                      activeLink === "profile" ? "active" : ""
                    }`}
                    href="/profile"
                    onClick={() => handleLinkClick("profile")}
                  >
                    Profile
                  </a>
                ) : (
                  <a
                    className={`nav-link ${
                      activeLink === "login" ? "active" : ""
                    }`}
                    href="/login"
                    onClick={() => handleLinkClick("login")}
                  >
                    Login
                  </a>)}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
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
