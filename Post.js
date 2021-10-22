import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

function Post({profilePic, image, username, timestamp, message, likes}) {
    return (
        <div className = "post">
            <div className="post__top">
                <Avatar src={profilePic}
                className = "post__avatar" />
                <div className = "post__topInfo">
                    <h3>
                        {username}
                    </h3>
                    <p>
                         {new Date(timestamp?.toDate()).toUTCString()}       {/*Returns a date converted to a string using Universal Coordinated Time (UTC). */}
                    </p>
                </div>
            </div>
            <div className="post__bottom">
                <p>
                    {message}
                </p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
               
                    <ThumbUpTwoToneIcon onClick={ () => likes.increase()} />

                    <p> Like &nbsp;</p>
                    <div className="badge badge-pill counter">0</div>
                </div>
                <div className="post__option">
                    <MessageTwoToneIcon />
                    <p> Comment </p>
                </div>
                <div className="post__option">
                <ShareTwoToneIcon />
                    <p> Share </p>
                </div>
                <div className="post__option">
                    <AccountBoxTwoToneIcon />
                    <ExpandMoreTwoToneIcon/>
                    
                </div>
            </div>

        </div>
    );
}

export default Post
