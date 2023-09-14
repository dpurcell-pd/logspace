import React from "react";
const USER = require('../models/user');

function Profile({ user }) { 
    console.log(user);  
  const HTML = {
    backgroundImage: "url(/background.jpg)",
  };
  const HEADER = {
    textAlign: "center",
    fontStyle: "italic",
    textDecoration: "underline",
    textShadow: "3px 2px 3px blue",
    color: "forestgreen",
  };
  const LINK = {
    textDecoration: "none",
    color: "white",
    listStyleType: "square",
    textShadow: "3px 2px 3px blue",
  };
  const TEXT = {
    color: "white",
    textShadow: "3px 2px 3px blue",
  };
  return (
    <html style={HTML}>
      <div>
        <a href="/profile">
          <h2 style={HEADER}>LogSpace</h2>
        </a>
        <p style={TEXT}>{user.name}</p>
        <p style={TEXT}>{user.email}</p>
        <p style={TEXT}>{user.password}</p>
        <p>
          <a style={LINK} href="/">
            ⬅ Back
          </a>
        </p>
      </div>
    </html>
  );
}

export default Profile;
