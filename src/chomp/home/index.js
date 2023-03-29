import React from "react";

const Home = () => {
    return (
        <div className="d-flex flex-column">
          <h1>WELCOME TO CHOMP</h1>
          <label>Browse: <input className="form-control" type="text"></input></label>
          <button className="btn btn-primary" type="button">Login</button>
        </div>
    );
};

export default Home;