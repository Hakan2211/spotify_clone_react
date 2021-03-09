import React from "react";
import classes from "./SongRow.module.css";

const SongRow = ({ track = "test" }) => {
  return (
    <div className={classes.songRow}>
      <img
        className={classes.songRow__album}
        src={track.album.images[0].url}
        alt=""
      />
      <div className={classes.songRow__info}>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
