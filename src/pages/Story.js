import React from "react";
import { Avatar } from "@mui/material";
import "./Story.css";
const Story = (props) => {
  return (
    <div className="storyContainer">
       
      <div className="story">
      <div className="storyWrapper">
        <Avatar  src="/static/images/avatar/1.jpg" className="storyAvator"/>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
      </div>

      <div className="storyWrapper">
        <Avatar  src="/static/images/avatar/1.jpg" className="storyAvator"/>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>


      <div className="storyWrapper">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="storyAvator"/>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
      </div>

      <div className="storyWrapper">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="storyAvator"/>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
      </div>
      </div>
    
    </div>
  );
};

export default Story;
