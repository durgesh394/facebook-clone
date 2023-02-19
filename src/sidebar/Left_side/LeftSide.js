import React, { useContext } from "react";
import "./LeftSide.css";
import { Avatar } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import AddCardIcon from '@mui/icons-material/AddCard';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TvIcon from '@mui/icons-material/Tv';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {LoginContextProvider} from "../../Context/LoginContext"
const LeftSide = () => {

    const {state}  = useContext(LoginContextProvider)


  return (
    <div className="left_Container" id="left">
      <div className="leftWrapper">

        <div style={{display:"flex" , alignItems:"center"}}>
          <span><Avatar
              src={state.PhotoURL}
            className="icon rightIcon"
            sx={{ width: 35, height: 35 }}
          /></span>
          <span>{state.user}</span>
        </div>

        <div className="leftfriends leftsideicon">
            <PeopleIcon  sx={{color:"#5DADE2"}}/>
            <span>Friends</span>
        </div>

        <div className="leftLeaste leftsideicon">
        <AddCardIcon sx={{color:"#7D3C98"}}/>
        <span>Latest</span>
        </div>

        <div className="groups leftsideicon">
        <GroupsIcon sx={{color:"#BB8FCE"}}/>
        <span>Group</span>
        </div>

        <div className="leftMarketplace leftsideicon">
            <StorefrontIcon sx={{color:"#82E0AA"}}/>
            <span>Marketplace</span>
        </div>

        <div className="leftwatch leftsideicon">
            <TvIcon sx={{color:"#D4AC0D"}}/>
            <span>Watch</span>
        </div>

        <div className="leftmemoris leftsideicon">
            <AlarmOnIcon sx={{color:"#C39BD3"}}/>
            <span>Memoris</span>
        </div>

        <div className="leftsaved leftsideicon">
            <BookmarkIcon sx={{color:"#5DADE2"}}/>
            <span>Saved</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
