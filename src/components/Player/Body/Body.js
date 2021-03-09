import React from "react";

import classes from "./Body.module.css";
import Header from "./Header/Header";
import SongRow from "./SongRow/SongRow";
import { useDataLayerValue } from "../../../context/DataLayer.js";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className={classes.body}>
      <Header spotify={spotify} />

      <div className={classes.body__info}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVYak5VxipJ5ry5GgDjay0aWBUmLNaQYjFA&usqp=CAU"
          alt=""
        />
        <div className={classes.body__infoText}>
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className={classes.body.songs}>
        <div className={classes.body__icons}>
          <PlayCircleFilledIcon className={classes.body__shuffle} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
