import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";
import {
  findLikesOfRx,
  isRxLikedByUser,
  undoLikeRx,
  likeRx,
} from "../../services/likes/likes-service";
import { findUserByUserId } from "../../services/users/users-service";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import Chomp from "..";
import SearchRxs from "../search-rxs";
import ImageCarousel from "./image-carousel";
import LoadingBar from "../reusable-components/loading-bar";
import RxBasicInfo from "../reusable-components/rx-basic-info/";
import RxHoursAccordion from "../reusable-components/rx-hours-accordion";
import RxYelpReviewsAccordion from "../reusable-components/rx-yelp-reviews-accordion";
import "./index.css";
import {
  deleteReview,
  findReviewsOfRx,
  reviewRx,
  updateUser,
  isReviewSharedByUser,
} from "../../services/reviews/reviews-service";

const ResultDetailsScreen = () => {
  const navigate = useNavigate();
  const { rxId } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  const [rxDetails, setRxDetails] = useState({});

  const [rxLikes, setRxLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [rxLikesUsernames, setRxLikesUsernames] = useState([]);

  const [rxReviews, setRxReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  const [showLikesModal, setShowLikesModal] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [editing, setEditing] = useState(false);

  const getRxDetails = async () => {
    const response = await findRxDetails(rxId);
    setRxDetails(response);
  };
  const getRxLikes = async () => {
    const response = await findLikesOfRx(rxId);
    setRxLikes(response);
  };
  const getRxReviews = async () => {
    const response = await findReviewsOfRx(rxId);
    setRxReviews(response);
  };
  const getIfLiked = async () => {
    if (currentUser) {
      isRxLikedByUser(rxId, currentUser._id).then((result) => {
        setLiked(result);
      });
    }
  };

  const onEditClick = async (review) => {
    console.log("editing");
    setEditing(true);
  };

  const onDeleteClick = async (review) => {};

  const onSaveClick = async () => {
    console.log("saving");
    setEditing(false);
  };

  const handleLikeClick = async () => {
    if (liked) {
      await undoLikeRx(rxId, currentUser._id);
      setRxLikes((likes) =>
        likes.filter((like) => like.userMongooseKey !== currentUser._id)
      );
      setLiked(false);
    } else {
      const response = await likeRx({ name: rxDetails.name, rxId: rxId });
      setRxLikes((likes) => [...likes, response]);
      setLiked(true);
    }
  };

  const handleUsernameClick = (username) => {
    navigate(`/user-search/${username}`);
  };

  const handleShareReviewClick = async () => {
    const response = await reviewRx(rxDetails, reviewText);
    getRxReviews((reviews) => [...reviews, response]);
    setReviewText("");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getRxDetails();
      await getRxLikes();
      await getRxReviews();
      await getIfLiked();
      setLoading(false);
    };

    fetchData();
  }, [currentUser]);

  useEffect(() => {
    const fetchUsernamesOfLikes = async () => {
      const usernames = [];
      rxLikes.map(async (like) => {
        const user = await findUserByUserId(like.userMongooseKey);
        usernames.push(user.username);
      });
      setRxLikesUsernames(usernames);
    };

    fetchUsernamesOfLikes();
  }, [rxLikes]);

  return (
    <Chomp activeLink="searchRxs">
      <SearchRxs />
      <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <RxBasicInfo rxDetails={rxDetails} />
              <div>
                <div className="badge bg-light">
                  {currentUser && (
                    <span onClick={handleLikeClick}>
                      {liked ? (
                        <i className="bi bi-heart-fill"></i>
                      ) : (
                        <i className="bi bi-heart "></i>
                      )}{" "}
                    </span>
                  )}
                  <span
                    onClick={() => {
                      setShowLikesModal(true);
                    }}
                    className="wd-nav-text"
                  >
                    {`${rxLikes.length} Likes`}
                  </span>
                  <Modal
                    show={showLikesModal}
                    onHide={() => setShowLikesModal(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Likes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {
                        <ul className="list-group">
                          {rxLikesUsernames.map((username) => (
                            <li
                              className="list-group-item wd-nav-text"
                              onClick={() => handleUsernameClick(username)}
                            >
                              {username}
                            </li>
                          ))}
                        </ul>
                      }
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="badge bg-light">
                  <span>
                    <i className="bi bi-chat"></i>{" "}
                  </span>
                  <span
                    onClick={() => {
                      setShowReviewsModal(true);
                    }}
                    className="wd-nav-text"
                  >
                    {`${rxReviews.length} Nibbler Reviews`}
                  </span>
                  <Modal
                    show={showReviewsModal}
                    onHide={() => setShowReviewsModal(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Nibbler Reviews</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {currentUser && currentUser.isReviewer && (
                        <div className="form-group">
                          <label
                            htmlFor="reviewTextarea"
                            className="form-label"
                          >
                            Write a review
                          </label>
                          <textarea
                            className="form-control"
                            id="reviewTextarea"
                            rows="5"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                          ></textarea>
                          <button
                            className="btn btn-primary mt-2"
                            onClick={handleShareReviewClick}
                          >
                            Share
                          </button>
                        </div>
                      )}
                      <ul className="list-group mt-2">
                        {rxReviews.map((review) => (
                          <li className="list-group-item">
                            {review.review}
                            {" - "}
                            {review.userMongooseKey === currentUser._id && (
                              <>
                                <button
                                  className="btn btn-danger float-end"
                                  onClick={() => onDeleteClick(review)}
                                >
                                  delete
                                </button>

                                {editing ? (
                                  <button
                                    className="btn btn-primary float-end"
                                    onClick={() => onSaveClick(review)}
                                  >
                                    Save
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-primary float-end"
                                    onClick={() => onEditClick(review)}
                                  >
                                    Edit
                                  </button>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex">
              <ImageCarousel rxPhotos={rxDetails.photos} />
              <ul className="list-group wd-additional-info-text">
                <li className="list-group-item">
                  <span className="fw-bold">Address</span>
                  <span className="float-end">
                    {rxDetails.location.display_address[0] +
                      ", " +
                      rxDetails.location.display_address[1]}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone Number</span>
                  <span className="float-end">{rxDetails.display_phone}</span>
                </li>
                <li className="list-group-item">
                  <RxHoursAccordion hours={rxDetails.hours} />
                </li>
                <li className="list-group-item">
                  <a className="fw-bold" href={rxDetails.url}>
                    Link to Yelp Page
                  </a>
                </li>
                <li className="list-group-item">
                  <RxYelpReviewsAccordion rxId={rxId} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Chomp>
  );
};

export default ResultDetailsScreen;
