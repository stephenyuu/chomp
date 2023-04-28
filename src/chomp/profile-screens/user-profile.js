import React, { useState, useEffect } from "react";
import Chomp from "..";
import { useNavigate, useParams } from "react-router";
import { findUserByUsernameThunk } from "../../services/users/users-thunk";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesList from "../favorites/favorites";
import ReviewsList from "../my-reviews/reviews";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState({});
  const navigate = useNavigate();

  const searchUsersClick = async () => {
    await dispatch(findUserByUsernameThunk(search.search));
    navigate(`/user-search/${search.search}`);
  };

  const loadUser = async () => {
    const action = await dispatch(findUserByUsernameThunk(username));
    setUser(action.payload);
  };

  useEffect(() => {
    loadUser();
  }, [dispatch, username]);

  return (
    <Chomp className="align-items-center" activeLink="userSearch">
      <form className="d-flex flex-column mt-3">
        <label htmlFor="search-username-input" className="form-label fw-bold">
          Search by username
        </label>
        <div className="d-flex justify-content-between">
          <input
            id="search-username-input"
            className="form-control me-sm-2"
            type="search"
            placeholder="Enter username"
            onChange={(e) => setSearch({ search: e.target.value })}
          />
          <Link
            className="btn btn-primary my-2 my-sm-0"
            onClick={searchUsersClick}
          >
            Search
          </Link>
        </div>
      </form>
      {user && (
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-primary">
                <div className="card-header border-primary">
                  <h3 className="mb-0">
                    {`${user.firstName} ${user.lastName}`}
                    {user.isReviewer ? (
                      <h5 className="mt-1 text-muted">Nibbler</h5>
                    ) : (
                      <h5 className="mt-1 text-muted">Chomper</h5>
                    )}
                  </h3>
                </div>
                <div className="card-body">
                  <div className="mt-1">
                    <h5 className="card-title">{`@${user.username}'s Favorites`}</h5>
                    <FavoritesList user={user} />
                    {user.isReviewer && (
                      <>
                        <h5 className="card-title mt-3">{`@${user.username}'s Reviews`}</h5>
                        <ReviewsList user={user} />{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!user && username && (
        <div className="container d-flex justify-content-center mt-3">
          <div className="card bg-light mb-3 w-50">
            <div className="card-body">No users found. Please try again!</div>
          </div>
        </div>
      )}
    </Chomp>
  );
};

export default UserProfile;
