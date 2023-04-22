import React from "react";
import Chomp from "..";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const HomeScreen = () => {

  const { currentUser } = useSelector((state) => state.users);


  return (
    <Chomp class="align-self-center" activeLink="">
      <h1>Chomp</h1>
      
    </Chomp>
  );
};

export default HomeScreen;
