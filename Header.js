import React from 'react'
import "./Header.css";
import ff__logo from "./ff__logo.png";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import GolfCourseTwoToneIcon from '@mui/icons-material/GolfCourseTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';
import { Avatar, IconButton } from "@material-ui/core";
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {useStateValue } from "./StateProvider";

function Header() {
const [{user}, dispatch] = useStateValue();

    return (
        <div className = "header">
            <div className ="header__left">
                <img src={ff__logo} className="header__img--logo" alt="friend face logo"/> 
                <div className="header__input">
                    <SearchTwoToneIcon />
                    <input placeholder = "Search FriendFace" type="text" />
                </div>
            </div>

            <div className ="header__center">
                <div className="header__option header__option--active">
                    <HomeTwoToneIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <GolfCourseTwoToneIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <SubscriptionsTwoToneIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <StoreTwoToneIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <SupervisedUserCircleTwoToneIcon fontSize="large" /> 
                </div>
            </div>
            
            <div className ="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                
                <IconButton>
                    <AddBoxTwoToneIcon />
                </IconButton>
                <IconButton>
                    <ForumTwoToneIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveTwoToneIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreTwoToneIcon />
                </IconButton>
            </div>
        </div>
            
        
    )
}

export default Header
