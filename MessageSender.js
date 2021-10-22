import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './MessageSender.css';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from '@firebase/app-compat';


function MessageSender() {
const [{user}, dispatch] = useStateValue();
const [input, setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();                                                 //Stops the default behaviour of refreshing when enter key pressed

    db.collection('posts').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl
    })

    setInput("");                       // resets input field when entered
    setImageUrl("");

};

    return (
        <div className = "messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value= {input}
                    onChange={e => setInput(e.target.value)}        // Onchange will start event everytime user types
                    className="messageSender__input"
                    placeholder={`Share a moment... ${user.displayName}`}
                     />
                    <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}   // when input is changed value is changed to input
                    placeholder= "image URL (Optional)"
                     />
                    
                    <button onClick={handleSubmit} type = "submit">       {/* Fires off handleSubmit function */ }     
                        Hidden Submit
                    </button>
                    
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamTwoToneIcon style={{ color: "Crimson"}} />     {/* Pactice inline style with HTML colour names */}
                    <h4>Live Video</h4>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "DarkCyan"}} />
                    <h4>Photo/Video</h4>
                </div>

                <div className="messageSender__option">
                    <EmojiEmotionsTwoToneIcon style={{ color: "BlueViolet"}} />
                    <h4>Feeling/Activity</h4>
                </div>

            </div>
        </div>
    )
}

export default MessageSender;
