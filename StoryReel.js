import React from 'react';
import Story from './Story';
import './StoryReel.css';


function StoryReel() {
    return (
        <div className = "storyReel">
           <Story
           image="https://i.ytimg.com/vi/wXEsldiW9Xg/maxresdefault.jpg"
           profileSrc="https://cdn.quotesgram.com/img/50/82/2139216375-game-over-old-sport-roy-it-crowd-shirt.jpg"
           title="Roy Trenneman" 
           />
            <Story
           image="https://image.tmdb.org/t/p/w780/9tmqEKPWMQT0WOHSMQG3k3uY7CQ.jpg"
           profileSrc="https://www.comedy.co.uk/images/library/people/180x200/t/the_it_crowd_jen.jpg"
           title="Jen Barber" 
           />
            <Story
           image="https://i.pinimg.com/736x/23/ed/fd/23edfddc60b9818ff0f9b2ac20038f31.jpg"
           profileSrc="http://images6.fanpop.com/image/photos/32700000/Douglas-Reynholm-the-it-crowd-32769239-299-168.jpg"
           title="Douglas Reynholm" 
           />
         
        </div>
    )
}

export default StoryReel;
