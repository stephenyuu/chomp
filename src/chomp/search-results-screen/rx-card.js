import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../services/users/users-thunk";
import { isRxLiked, likeRx } from "../../services/rxs/rxs-service";
import RxBasicInfo from "../reusable-components/rx-basic-info/";

const RxCard = ({ rx }) => {
  const { currentUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seeMoreDetails = () => {
    navigate(`/search/${rx.id}`);
  };


  const handleLikeClick = () => {
    const rxLiked = isRxLiked(rx.id, currentUser._id);
    console.log(rx.id, currentUser._id)
    console.log(rxLiked);

    //likeRx({ name: rx.name, rxId: rx.id });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="wd-rx-card-width position-relative me-2">
        <img
          src={rx.image_url}
          className="img-fluid border border-5 border-secondary rounded"
        />
        {currentUser && (
          <div className="wd-like-icon" onClick={handleLikeClick}>
            <i className="bi bi-heart "></i>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-around wd-rx-card-width">
        <RxBasicInfo rxDetails={rx} />
        <button
          onClick={seeMoreDetails}
          className="btn btn-secondary align-self-center"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default RxCard;
