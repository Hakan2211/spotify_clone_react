import React from "react";

import classes from "./Player.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const Player = ({ spotify }) => {
  return (
    <div className={classes.player}>
      <div className={classes.player__body}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
