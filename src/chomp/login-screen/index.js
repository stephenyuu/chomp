import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    navigate("/home");
  };
  const onRegisterClick = () => {
    navigate("/home");
  };
  const [showRegisterPopup, setRegisterPopup] = useState(false);
  const handleClose = () => setRegisterPopup(false);
  const handleShow = () => setRegisterPopup(true);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="card-body">
        <div>
          <input className="form-control" placeholder="Username"></input>
          <input className="form-control" placeholder="Password"></input>
        </div>
        <button
          onClick={onLoginClick}
          type="button"
          className="btn btn-secondary align-center"
        >
          Login
        </button>
        <button
          onClick={onRegisterClick}
          type="button"
          className="btn btn-secondary align-center"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
