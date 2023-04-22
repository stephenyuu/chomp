import React from "react";
import Chomp from "..";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const HomeScreen = () => {

  const { currentUser } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const soloNavigate = async () => {
    navigate("/solo");
  };

  const groupNavigate = async () => {
    if(currentUser){
      navigate("/group");
    } else {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Chomp class="align-self-center" activeLink="">
      <h1>Chomp</h1>
      <button
        className="btn btn-lg btn-primary me-3"
        type="button"
        onClick={soloNavigate}
      >
        Solo Chomping
      </button>
      <button
        className="btn btn-lg btn-primary"
        type="button"
        onClick={groupNavigate}
      >
        Group Chomping
      </button>
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Uh-oh!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Please sign in to start a group Chomp</h2>
        </Modal.Body>
        <Modal.Footer >
        <button className="btn btn-primary" onClick={() => {navigate("/login")}}>Login</button>
        </Modal.Footer>
      </Modal>
    </Chomp>
  );
};

export default HomeScreen;
