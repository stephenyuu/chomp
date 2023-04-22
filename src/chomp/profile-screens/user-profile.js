import React, { useState } from "react";
import Chomp from "..";
import { useNavigate, useParams } from "react-router";
import { Dispatch } from "react";
import { findUserByUsernameThunk } from "../../services/users/users-thunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState({});
  const navigate = useNavigate();

  const searchUsersClick = async () => {
    await dispatch(findUserByUsernameThunk(search.search));
    navigate(`/userSearch/${search.search}`);
  };

  useEffect(() => {
    const loadUser = async () => {
      const action = await dispatch(findUserByUsernameThunk(username));
      setUser(action.payload);
    };
    loadUser();
  }, [dispatch, username]);
  return (
    <Chomp className="align-items-center" activeLink="userSearch">
      <form className="d-flex mt-3">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="search users"
                onChange={(e) =>
                  setSearch({ search: e.target.value })}
              />
              <Link className="btn btn-secondary my-2 my-sm-0" onClick={searchUsersClick}>
                Search
              </Link>
            </form>
        {user ? (
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">{user.username}</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-5">
          {/* <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> */}
        </div>
      )}
    </Chomp>
  );
};

export default UserProfile;
