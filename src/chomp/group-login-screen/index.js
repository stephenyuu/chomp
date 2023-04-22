import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import Chomp from "..";
import { createSessionThunk, joinSessionThunk } from "../../services/sessions/sessions-thunk";

const GroupLoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [searchTerms, setSearchTerms] = useState({});
  const [priceDropdown, setPriceDropdown] = useState("");
  

  const [session, setSession] = useState({
    groupSessionCode: "",
    totalUsers: "",
    respondedUsers: 0,
    listRxs: "",
    searchURL: ""
  });

  const validSubmit = () => {
    return searchTerms.location && searchTerms.location.length !== 0;
  };

  const enterCodeClick = async () => {
    const response = await dispatch(joinSessionThunk(session));
    setSession(response.payload)
    navigate(`/group/${response.payload.groupSessionCode}/search?${response.payload.searchURL}`)
  };

  const createCodeClick = async () => {
    if (validSubmit) {
      setShowModal(false);
      const urlString = "" + new URLSearchParams(searchTerms);
      const updatedSession = { ...session, searchURL: urlString };
      await dispatch(createSessionThunk(updatedSession));
      setSession(updatedSession);
      navigate(`/group/${updatedSession.groupSessionCode}/search?${updatedSession.searchURL}`);
    } else {
      console.log("input errors");
    }
  };
  

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Chomp activeLink="">
      <h1>chomping code creation</h1>
      <div className="form-group">
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputCode"
              placeholder="input your chomp code!"
              value={session.groupSessionCode}
              onChange={(e) =>
                setSession({ ...session, groupSessionCode: e.target.value })
              }
            />
          </div>
        </div>
        <button
          onClick={enterCodeClick}
          type="button"
          className="btn btn-secondary align-center mt-3"
        >
          Start Chomping!
        </button>
        <button
          onClick={handleShowModal}
          type="button"
          className="btn btn-secondary align-center mt-3 ms-3"
        >
          Create Code
        </button>

        <Modal show={showModal} onHide={() => setShowModal(false)} >
          <Modal.Header closeButton>
            <Modal.Title>Create Chomp Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              <div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="modalInputEmail"
                    placeholder="create unique chomp code + share with your friends"
                    onChange={(e) =>
                      setSession({ ...session, groupSessionCode: e.target.value })
                    }
                  />
                  <input
                    className="form-control mt-3"
                    id="modalGroupNumberTotal"
                    placeholder="how many friends?"
                    onChange={(e) =>
                      setSession({ ...session, totalUsers: e.target.value })
                    }
                  />
                </div>
                <form className="d-flex justify-content-center mt-3">
                  <div className="form-group wd-input-field">
                    <label
                      htmlFor="search-term-input"
                      className="form-label fw-bold"
                    >
                      Find
                    </label>
                    <input
                      onChange={(e) => {
                        setSearchTerms({
                          ...searchTerms,
                          term: e.target.value,
                        });
                      }}
                      id="search-term-input"
                      type="text"
                      placeholder="Chinese food, fancy restaurant, delivery"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group ms-3 wd-input-field">
                    <label
                      htmlFor="location-input"
                      className="form-label fw-bold"
                    >
                      Location
                    </label>
                    <input
                      onChange={(e) => {
                        setSearchTerms({
                          ...searchTerms,
                          location: e.target.value,
                        });
                      }}
                      id="location-input"
                      type="text"
                      placeholder="address, neighborhood, city, state, zip code"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group ms-3">
                    <label
                      htmlFor="price-range-input"
                      className="form-label fw-bold"
                    >
                      Price
                    </label>
                    <select
                      onChange={(e) => {
                        setPriceDropdown(e.target.value);
                        setSearchTerms({
                          ...searchTerms,
                          price: e.target.value,
                        });
                      }}
                      value={priceDropdown}
                      id="price-range-input"
                      className="form-select"
                    >
                      <option value="" disabled hidden>
                        select price
                      </option>
                      <option value="1">$</option>
                      <option value="2">$$</option>
                      <option value="3">$$$</option>
                      <option value="4">$$$$</option>
                    </select>
                  </div>
                </form>
              </div>
            }
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={createCodeClick}
            >
              Start Chomping!
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </Chomp>
  );
};

export default GroupLoginScreen;
