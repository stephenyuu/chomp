import React, { useState } from "react";
import Chomp from "..";
import { useNavigate, useParams } from "react-router";
import { Dispatch } from "react";
import { findUserByUsernameThunk } from "../../services/users/users-thunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

const Favorties = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState({});

  return (
    <Chomp className="align-items-center" activeLink="userSearch">
      <h1>Favorites Page</h1>
    </Chomp>
  );
};

export default Favorties;
