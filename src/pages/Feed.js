import React from 'react'
import Story from './Story'
import {Avatar } from "@mui/material"
import "./Feed.css"

import Post from './Post'


import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { useContext } from 'react';
import { post } from '../Context/PostContext';
import { LoginContextProvider } from "../Context/LoginContext";
const Feed = () => {

  const {state} = useContext(LoginContextProvider)
  //model open when click input field
 const {setmodel} = useContext(post)
  const openModel = () =>{
    setmodel(true)
  }


  
  return (
    <div className='feedCon'>
      <div className="storyCon">
      <Story/>
      </div>
      <div className="postFeed">
              <div className="postTop">

                <div className="postTopWrapper">
                <Avatar src={state.PhotoURL}/>
                  <input type="text" placeholder="What's in Your Mind .." onClick={openModel} />
                </div>

                 <div className="postbottom">
                    <div className='postbottom1'><VideoCallIcon sx={{color:"#C0392B"}}/><span>Live Video</span></div>
                    <div className='postbottom1'><AddToPhotosIcon sx={{color:"#239B56"}}/><span>photos/videos</span></div>
                    <div className='postbottom1'><SentimentDissatisfiedIcon sx={{color:"#F4D03F"}}/> <span>feeling/activity</span></div>
                 </div>
              </div>
      </div>
      
      <Post />
    </div>
  )
}

export default Feed