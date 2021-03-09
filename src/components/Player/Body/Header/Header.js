import React from "react";

import classes from "./Header.module.css";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import { useDataLayerValue } from "../../../../context/DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Podcasts "
        />
      </div>
      <div className={classes.header__right}>
        <Avatar src={user?.images[0]?.url} alt={user} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
