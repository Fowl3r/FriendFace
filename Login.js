import React from 'react'
import "./Login.css"
import ff__logo from "./ff__logo.png";
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
const [state, dispatch] = useStateValue();                         //allows to pull data from Data Layer, dispatch moves data into Data Layer

const signIn = () => {
    //sign in 
    auth.signInWithPopup(provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,                                      // pushes the response into Data Layer
        });
        
    })
    .catch((error) => alert(error.message));
}

    return (
        <div className= "login">
            <div className="login__Logo">
                <img 
                src={ff__logo} alt="Friend Face Logo" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
