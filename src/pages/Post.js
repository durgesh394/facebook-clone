import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import React from "react";
import { useState } from "react";

import "./Post.css";
const Post = () => {
  const [post, setPost] = useState([]);
  



  return (
    <div className="post_container">
      <div className="wrapper">
        <div className="post_top">
          <div className="postleft">
            <Avatar sx={{ width: "35px", height: "35px" }} />
            <h5 id="postname">Durgesh shukla</h5>
          </div>
          <div className="postright">
            <MoreHorizIcon />
            <CloseIcon />
          </div>
        </div>

        <div className="post_middle">
          <p id="postcontent">Love to nature..!!</p>
          <div id="postPhoto2">
          <img src="../assets/bg.jpg" alt="" className="bgImg" />
          </div>
        </div>

        <div className="bottom_post">
          <div className="bottom_post1">
            <ThumbUpOutlinedIcon sx={{ color: "#444" }} />
            <ChatBubbleOutlineOutlinedIcon sx={{ color: "#444" }} />
            <ReplyOutlinedIcon sx={{ color: "#444" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
