import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import {auth , google_provider} from "../Context/firebase"
import { useContext } from "react";
import { LoginContextProvider } from "../Context/LoginContext";
const Login = () => {

const {dispatch} = useContext(LoginContextProvider)

  const loginHandler = () =>{
      signInWithPopup(auth , google_provider)
      .then((result)=>{
          dispatch({
            type : "Set_User" , 
            userName : result.user.displayName,
            PhotoURL : result.user.photoURL,
          })
      })
      .catch((err)=>{
        console.log(err.code)
      })
  }
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginbtn">
          <div className="flogo">
            <img src="../assets/facebook.png" alt="" className="flogoimg" />
          </div>

          <div className="googlelogin">
            <div className="innerbtn">
            <img
              src="../assets/googleLogo.png"
              alt=""
              className="googlelogoimg"
            />
            <button onClick={loginHandler}>Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
