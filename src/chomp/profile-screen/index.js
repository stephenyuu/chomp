import React, { useState, useEffect } from "react";
import * as userService from "../../services/users/users-service";
import { useNavigate, useParams } from "react-router-dom";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../../services/users/users-thunk";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/user-reducer";
import Chomp from "..";

function Profile() {
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
      setProfile(action.payload);
      await dispatch(updateUser(action.payload));
    }
    setEditing(false);
  };

  const getUserByUsername = async () => {
    const user = await userService.findUserByUsername(username);
    setProfile(user);
  };

  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };

  useEffect(() => {
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, []);
  return (
    <Chomp activeLink="profile">
      <h1>
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
        Profile {username}
      </h1>
          <div class="form-group">
            <div class="form-floating mb-3">
              <input
                type="firstName"
                class="form-control"
                id="firstNameInput"
                value={profile.firstName}
                placeholder="John"
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
              />
              <label for="firstNameInput">First Name</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="lastName"
                class="form-control"
                id="lasttNameInput"
                value={profile.lastName}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
              />
              <label for="lastNameInput">Last Name</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="username"
                class="form-control"
                id="usernameInput"
                value={profile.username}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
              />
              <label for="usernameInput">Username</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="emailInput"
                value={profile.email}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
              />
              <label for="emailInput">email</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="passwordInput"
                value={profile.password}
                disabled={editing ? "" : "yes"}
                onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
              />
              <label for="passwordInput">Password</label>
            </div>



          </div>
      {currentUser && !editing && (
        <button onClick={() => logout()} className="btn btn-danger">
          Logout
        </button>
      )}
    </Chomp>
  );
}

export default Profile;
