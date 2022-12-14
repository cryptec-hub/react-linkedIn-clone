import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";
import SidebarStats from "./SidebarStats";

function Sidebar() {
  // get user state from redux-store
  const user = useSelector(selectUser);

  // Create a function that returns a a jsx component passing in topic as argument
  const recentItems = (topic) => (
    <div className="sidebar_recentItems">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="images/wallpaper.jpg" alt="" />
        <Avatar className="sidebar_avatar" src={user.photoUrl}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <SidebarStats />
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("webdevelopment")}
        {recentItems("mernstack")}
        {recentItems("softwareengeering")}
      </div>
    </div>
  );
}

export default Sidebar;
