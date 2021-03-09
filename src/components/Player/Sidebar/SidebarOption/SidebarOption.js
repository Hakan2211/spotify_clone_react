import React from "react";
import classes from "./SidebarOption.module.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className={classes.sidebarOption}>
      <Icon className={classes.sidebarOption__icon} />
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
