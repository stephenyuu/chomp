import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { isRxLiked, likeRx, dislikeRx} from "../../services/rxs/rxs-service";
import { useState, useEffect } from "react";
import RxBasicInfo from "../reusable-components/rx-basic-info/";

const RxCard = ({ rx }) => {
  const { currentUser } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const seeMoreDetails = () => {
    navigate(`/search/${rx.id}`);
  };

  const [liked, setLiked] = useState(false);
  
  const handleLikeClick = () => {
    if (liked) {
      dislikeRx(rx.id, currentUser._id);
      setLiked(false)
    } else {
      likeRx({ name: rx.name, rxId: rx.id });
      setLiked(true)
    }
  };

  useEffect(() => {
    if (currentUser) {
      isRxLiked(rx.id, currentUser._id).then((result) => {
        setLiked(result);
      });
    }
  }, [currentUser, rx.id]);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="wd-rx-card-width position-relative me-2">
        <img
          src={rx.image_url}
          className="img-fluid border border-5 border-secondary rounded"
        />
        {currentUser && (
          <div className="wd-like-icon" onClick={handleLikeClick}>
            {liked ? (<i className="bi bi-heart-fill"></i>) : <i className="bi bi-heart "></i>}
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
