import React, { createContext, useReducer } from "react";
import LoginReducer from "./LoginReducer";
export const LoginContextProvider = createContext();

let init = {
  user: null,
  photoURL: null,
};
const LoginContext = (props) => {
  const [state, dispatch] = useReducer(LoginReducer, init);
  return (
    <>
      <LoginContextProvider.Provider value={{ state, dispatch }}>
        {props.children}
      </LoginContextProvider.Provider>
    </>
  );
};

export default LoginContext;
