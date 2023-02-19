import React from "react";
import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Avatar, Icon, IconButton } from "@mui/material";
import { LoginContextProvider } from "../Context/LoginContext";
import { useContext } from "react";

const Navbar = () => {

  const {state , dispatch , user} = useContext(LoginContextProvider)

  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        {/* right*/}
        <div className="logo">
          <img src="./assets/facebook.png" alt="" className="facebookLogo" />
          <div className="searchContainer">
            <SearchOutlinedIcon />
            <input type="text" placeholder="search" />
          </div>
        </div>
        {/* middle */}
        <div className="navbar_middle_icon">
          <div className="homepage">
            <HomeOutlinedIcon className="icon middeleIcon" />
          </div>
          <div className="watchIcon">
            <OndemandVideoOutlinedIcon className="icon middeleIcon" />
          </div>
          <div className="marketplaceIcoi">
            <StorefrontOutlinedIcon className="icon middeleIcon" />
          </div>
          <div className="groupIcon">
            <GroupsOutlinedIcon className="icon middeleIcon" />
          </div>
          <div className="gameIcon">
            <SportsEsportsOutlinedIcon className="icon middeleIcon" />
          </div>
        </div>
        {/* left */}
        <div className="navbarRightWrapper">
          <div className="menu">
            <AppsOutlinedIcon className="icon rightIcon" />
          </div>
          <div className="message">
            <MapsUgcOutlinedIcon className="icon rightIcon" />
          </div>
          <div className="notification">
            <NotificationsOutlinedIcon className="icon rightIcon" />
          </div>
          <div className="avator">       
              <Avatar src={state.PhotoURL} className="icon rightIcon" sx={{ width: 35, height: 35 }}/>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
