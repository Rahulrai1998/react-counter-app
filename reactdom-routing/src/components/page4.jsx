import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./comp-css/compo-styles.css";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate()

const handleLogout = () =>{
    auth.logout()
    navigate('/')
}
  return (
    <div className="content home">
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleLogout} className="btn btn-logout">Logout</button>
    </div>
  );
};

export default Profile;
