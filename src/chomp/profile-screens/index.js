import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
  deleteUserThunk,
} from "../../services/users/users-thunk";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Chomp from "..";

function ProfileSettings() {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProfile = async () => {
    const action = await dispatch(profileThunk());
    setProfile(action.payload);
  };

  const saveProfile = async () => {
    if (editing) {
      const action = await dispatch(updateUserThunk(profile));
      setProfile(profile);
      await dispatch(profileThunk());
    }
    setProfile(profile);
    setEditing(false);
  };

  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };

  const deleteAccount = async () => {
    await dispatch(deleteUserThunk(profile));
    navigate("/login");
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Chomp activeLink="settings">
      {currentUser && (
        <>
          <h1>User Settings</h1>
          <div className="form-group">
            <div className="form-floating mb-3">
              <input
                type="firstName"
                className="form-control"
                id="firstNameInput"
                value={profile.firstName}
                placeholder="John"
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
              <label htmlFor="firstNameInput">First Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="lastName"
                className="form-control"
                id="lasttNameInput"
                value={profile.lastName}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
              <label htmlFor="lastNameInput">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="username"
                className="form-control"
                id="usernameInput"
                value={profile.username}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
              <label htmlFor="usernameInput">Username</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                value={profile.email}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
              <label htmlFor="emailInput">email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                value={profile.password}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
              />
              <label htmlFor="passwordInput">Password</label>
            </div>
          </div>
          {!editing ? (
            <button onClick={() => logout()} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <button onClick={deleteAccount} className="btn btn-danger">
              Delete
            </button>
          )}
          {editing ? (
            <button
              className="float-end btn btn-primary"
              onClick={() => saveProfile()}
            >
              Save
            </button>
          ) : (
            <button
              className="float-end btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          )}
        </>
      )}
      {!currentUser && (
        <div className="container d-flex justify-content-center">
        <div className="alert alert-dismissible alert-danger mt-5 w-50">
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          <strong>Oh snap!</strong> We apologize, but the account and password combination you entered does not exist in our records.{" "}
          <Link className="alert-link" to="/login">
            Please try again with valid login credentials.
          </Link>
        </div>
      </div>
      
      )}
    </Chomp>
  );
}

export default ProfileSettings;
