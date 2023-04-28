import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk, registerThunk } from "../../services/users/users-thunk";
import { Modal } from "react-bootstrap";
import Chomp from "..";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isReviewer: "false",
    rxId: ""
  });

  const onLoginClick = async () => {
    await dispatch(loginThunk(user));
    navigate("/user-settings");
  };
  const onRegisterClick = async () => {
    await dispatch(registerThunk(user));
    setShowModal(false);
    navigate("/user-settings");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleUserTypeChange = (e) => {
    const isReviewer = e.target.value === "reviewer";
    setUser({ ...user, isReviewer });
  };
  
  return (
    <Chomp activeLink="login">
      <h3 className="fw-bold mt-3">Login</h3>
      <div className="form-group">
        <div>
          <div>
            <div>
              <div className="form-group">
                <label htmlFor="inputUsername" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword" className="form-label mt-4">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <button
            onClick={onLoginClick}
            type="button"
            className="btn btn-secondary align-center mt-3"
          >
            Login
          </button>
          <button
            onClick={handleShowModal}
            type="button"
            className="btn btn-secondary align-center mt-3 ms-3"
          >
            Create Account
          </button>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                <div>
                  <div className="form-group">
                    <label htmlFor="modalInputEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="modalInputEmail"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modalFirstName" className="form-label mt-4">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="modalFirstName"
                      placeholder="Enter your first name"
                      onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modalLastName" className="form-label mt-4">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="modalLastName"
                      placeholder="Enter your last name"
                      onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modalUsername" className="form-label mt-4">
                      Username
                    </label>
                    <input
                      className="form-control"
                      id="modalUsername"
                      placeholder="Enter your username"
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modalInputPassword" className="form-label mt-4">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="modalInputPassword"
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                    <label className="form-label mt-4">
                      User Type
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="reviewerRadio"
                        value="reviewer"
                        onChange={handleUserTypeChange}
                      />
                      <label className="form-check-label" htmlFor="reviewerRadio">
                        Nibbler
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="regualrRadio"
                        value="regular"
                        onChange={handleUserTypeChange}
                      />
                      <label className="form-check-label" htmlFor="regualrRadio">
                        Chomper
                      </label>
                    </div>
                  </div>
                </div>
              }
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={onRegisterClick}
              >
                Create Account
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Chomp>
  );
};

export default LoginScreen;
