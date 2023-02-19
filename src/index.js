import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginContext from "./Context/LoginContext";

import {  
  BrowserRouter
}   
from 'react-router-dom';
import PostContext from "./Context/PostContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <LoginContext>
    <PostContext>

      <App />
   
    </PostContext>
    </LoginContext>
    </BrowserRouter>
    </>
);


