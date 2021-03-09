import React from "react";

import classes from "./Login.module.css";

import { loginUrl } from "../api/spotify";

const Login = () => {
  return (
    <div className={classes.login}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Spotify_Badge_White.svg/2000px-Spotify_Badge_White.svg.png"
        alt=""
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;
