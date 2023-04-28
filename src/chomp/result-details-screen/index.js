import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findRxDetails } from "../../services/rxs/rxs-service";
import {
  findLikesOfRx,
  isRxLikedByUser,
  undoLikeRx,
  likeRx
} from "../../services/likes/likes-service";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import Chomp from "..";
import SearchRxs from "../search-rxs";
import ImageCarousel from "./image-carousel";
import LoadingBar from "../reusable-components/loading-bar";
import RxBasicInfo from "../reusable-components/rx-basic-info/";
import RxHoursAccordion from "../reusable-components/rx-hours-accordion";
import RxYelpReviewsAccordion from "../reusable-components/rx-yelp-reviews-accordion";
import "./index.css";

const ResultDetailsScreen = () => {
  const { rxId } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  const [rxDetails, setRxDetails] = useState({});
  const [rxLikes, setRxLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [showLikesModal, setShowLikesModal] = useState(false);
  const getRxDetails = async () => {
    const response = await findRxDetails(rxId);
    setRxDetails(response);
  };
  const getRxLikes = async () => {
    const response = await findLikesOfRx(rxId);
    setRxLikes(response);
  };
  const getIfLiked = async () => {
    if (currentUser) {
      isRxLikedByUser(rxId, currentUser._id).then((result) => {
        setLiked(result);
      });
    }
  };

  const handleLikeClick = async () => {
    if (liked) {
      await undoLikeRx(rxId, currentUser._id);
      setRxLikes((likes) => likes.filter((like) => like.userMongooseKey !== currentUser._id));
      setLiked(false);
    } else {
      const response = await likeRx({ name: rxDetails.name, rxId: rxId });
      setRxLikes((likes) => [...likes, response]);
      setLiked(true)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getRxDetails();
      await getRxLikes();
      await getIfLiked();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Chomp activeLink="searchRxs">
      <SearchRxs />
      <div className="mt-3">
        {loading && <LoadingBar />}
        {!loading && (
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <RxBasicInfo rxDetails={rxDetails} />
              <div className="badge bg-light">
                <span onClick={handleLikeClick}>
                  {liked ? (
                    <i className="bi bi-heart-fill"></i>
                  ) : (
                    <i className="bi bi-heart "></i>
                  )}
                </span>{" "}
                <span
                  onClick={() => {
                    setShowLikesModal(true);
                  }}
                  className="wd-likes-count"
                >
                  {rxLikes.length}
                </span>
                <Modal
                  show={showLikesModal}
                  onHide={() => setShowLikesModal(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Likes</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {<ul className="list-group-item"></ul>}
                  </Modal.Body>
                </Modal>
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
