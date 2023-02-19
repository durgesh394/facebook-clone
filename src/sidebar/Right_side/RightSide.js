import React from 'react'
import "./RightSide.css"
import {Avatar} from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CachedIcon from '@mui/icons-material/Cached';
import CampaignIcon from '@mui/icons-material/Campaign';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';


const RightSide = () => {
  return (
    <div className="right_sideContainer">
      
        <div className="righttitle">
        <h4>Your Pages and profiles</h4>
        <h4><MoreHorizIcon /></h4>
        </div>

      <div className="pageList">
      <Avatar sx={{width:"25px" , height:"25px"}} src="https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg"/>
      <span>React.js page</span>
      </div>

      <div className="pageList">
      <CachedIcon />
      <span>Switch into Page</span>
      </div>

      <div className="pageList">
      <CampaignIcon />
      <span>Create Promotion</span>
      </div>

      <div className="rightContact">
        <div className="rightbottom">
           <h4>Contact</h4>
           <h4 id="righth4">
            <VideocamIcon />
            <SearchIcon  className='righth4'/>
            <MoreHorizIcon />
           </h4>

           

        </div>
        </div>
        <div className="contact">
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://www.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg"/><span> Durgesh shukla</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"/><span>Manish Tiwari</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU="/><span>Rohit Tiwar</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://st.depositphotos.com/1987395/1929/i/450/depositphotos_19296987-stock-photo-young-man-fashion-shot-at.jpg"/><span>Tanay Pratap</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://img.freepik.com/free-photo/studio-portrait-glamour-male-sunglasses_613910-8399.jpg?auto=format&h=200"/><span>Akashya saini</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/><span>Anil sidhu</span></div>


            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://www.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg"/><span> Durgesh shukla</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"/><span>Manish Tiwari</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU="/><span>Rohit Tiwar</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://st.depositphotos.com/1987395/1929/i/450/depositphotos_19296987-stock-photo-young-man-fashion-shot-at.jpg"/><span>Tanay Pratap</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://img.freepik.com/free-photo/studio-portrait-glamour-male-sunglasses_613910-8399.jpg?auto=format&h=200"/><span>Akashya saini</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/><span>Anil sidhu</span></div>



            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://www.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg"/><span> Durgesh shukla</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"/><span>Manish Tiwari</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU="/><span>Rohit Tiwar</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://st.depositphotos.com/1987395/1929/i/450/depositphotos_19296987-stock-photo-young-man-fashion-shot-at.jpg"/><span>Tanay Pratap</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://img.freepik.com/free-photo/studio-portrait-glamour-male-sunglasses_613910-8399.jpg?auto=format&h=200"/><span>Akashya saini</span></div>
            <div className='contactinline'><Avatar sx={{width:"25px" , height:"25px"}} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/><span>Anil sidhu</span></div>

           </div>
    </div>


    
  )
}

export default RightSide