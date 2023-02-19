import "./App.css";
import Navbar from "./Components/Navbar";
import LeftSide from "./sidebar/Left_side/LeftSide";
import RightSide from "./sidebar/Right_side/RightSide";
import Feed from "./pages/Feed";
import { Modal , Avatar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PostContext, { post } from "./Context/PostContext";
import { useContext, useState } from "react";
import { LoginContextProvider } from "./Context/LoginContext";
import Login from "./Components/Login";
import Post from "./pages/Post";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { FileOpen } from "@mui/icons-material";



function App() {
  
  const {model , setmodel} = useContext(post)
  const [postinput , setpostInput] = useState({
    text : "",
    photo : ""
  })
  const {state , dispatch , user} = useContext(LoginContextProvider)


  const modelCloseHandler = () =>{
     setmodel(false)
  }

//file open
const FileOpen = (e) =>{
  alert("hi ")
  document.getElementsById("filepost").click()
  
  
}
  //post 
const PostHandler = ()=>{
   console.log(postinput)
  }
  return (
    <div>
      {! state.user ? <Login/> : 
      <>
     
      <Modal  open={model} onClose={modelCloseHandler} className="model">
             <div className="modelwrapper">
                   <div className="modeltop">
                   <h2>Create Post</h2>
                    <h2><CloseIcon sx={{width:"35px",height:"35px",backgroundColor:"#ccc",padding:"7px" , borderRadius:"20px" ,textAlign:"center"}} onClick={modelCloseHandler}/></h2>
                   </div>

                   <div className="modelMiddle">
                    <Avatar src={state.PhotoURL} sx={{width:"25px" , height:"25px"}}/>
                    <div className="middleSide">
                      <h5>{state.user}</h5>
                       <div style={{display:"flex", gap:"3px" ,alignItems:"center" , backgroundColor:"#D7DBDD" , borderRadius:"12px",width:"fit-content", padding:"0px 5px" , marginTop:"5px"}}><PublicIcon sx={{fontSize:"12px", padding:"1px"}}/><span style={{fontSize:"12px"}}>public</span></div>
                         <textarea  className="posttextarea" placeholder="What's on your mind.?" value={postinput.text} onChange={(e)=>{setpostInput({...postinput, text : e.target.value})}}/>
                    </div>
                   </div>

                   <div className="modelbottom">
                    <div className="bottomtext">
                      <h4>Add to your post</h4>
                    </div>
                    <div className="bottomIcon">
                        <input type="file" id="filepost" value={postinput.photo} onChange={(e)=>setpostInput({...postinput, photo : e.target.files[0]})}/>
                        <AddToPhotosIcon sx={{color:"#27AE60"}} onClick={FileOpen} />
                        <VideocamIcon sx={{color:"red"}} />
                        <InsertEmoticonIcon sx={{color:"#D68910"}}/>
                    </div>
                   </div>
                   <div>
                  
                   <div className="post">
                   <button className="postBtn" onClick={()=>{PostHandler()}}>Post</button>
                   </div>

                   </div>
             </div>
      </Modal>


    <div className="main">
      <Navbar />
    
      <div className="mainpage">
        <LeftSide />
        <Feed />
   
        <RightSide />
      </div>
    </div>
    </>
}
    </div>
 
  );
}

export default App;
