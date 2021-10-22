import React, {useState, useEffect} from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))              //Real Time connections, maps to state[] empty bracket at end of code where dependencies usually are makes sure it only runs once. db.collection accessing database. onSnapshot is a realtime snapShot of the db which is pulled into code. setPosts(snapshot.docs) then sets posts to info from db, .map through every single one. for each doc return a custom object with an id, which is a unique document id and some data which is doc data from db
    );
},[])

    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />

           {posts.map((post) => (
           <Post
           key={post.id}                        //maps through every post and return post components, keys are neccesary for efficient React rendering
           profilePic={post.data.profilePic}
           message={post.data.message}
           timestamp={post.data.timestamp}
           username={post.data.username}
           image={post.data.image}
           />
           ))}
        </div>
    );
}

export default Feed

