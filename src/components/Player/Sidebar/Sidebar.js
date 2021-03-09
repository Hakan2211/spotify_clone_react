import React from "react";
import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../context/DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title=" Your Library" />

      <br />
      <strong className={classes.sidebar__title}>Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption Icon={null} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
