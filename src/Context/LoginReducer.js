import React from 'react'

const LoginReducer = (state , action) => {
 switch(action.type){
    case "Set_User":
        return{
            ...state,
            user : action.userName,
            PhotoURL :action.PhotoURL,
            
        }
        default :
        return {...state}
 }
}

export default LoginReducer
