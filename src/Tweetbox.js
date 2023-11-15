import React, { useState } from 'react' ;
import './Tweetbox.css';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import db from './Firebase';

function Tweetbox() {
   const [tweetMessage , SetTweetMessage] = useState("");
   const [tweetImage , SetTweetImage] = useState("");
   const sendTweet  = e => {
    e.preventDefault();
  db.collection("posts").add({
  username : 'vashu',
  verified  :true ,
   avatar : "https://d31ezp3r8jwmks.cloudfront.net/rrggk40pbkppfi0tas3j73qr4lub",
   image  : tweetImage,
    text : tweetMessage

  });
SetTweetImage("");
SetTweetMessage("");
   };

  return (
    <div className="tweetBox"   > 
    <form   >
         <div  className=" tweetBox_input">
         <Avatar  src="https://d31ezp3r8jwmks.cloudfront.net/rrggk40pbkppfi0tas3j73qr4lub" ></Avatar>
          <input  
          onChange={ (e) => SetTweetMessage(e.target.value)}
          value={tweetMessage}  placeholder="What's happening? " type='text' />
          <input 
           onChange={ (e) => SetTweetImage(e.target.value)}
           value={tweetImage}
          
          placeholder= "Enter image url "/>
         </div>
         <Button   onClick={sendTweet} variant='contained' className="tweetBox_tweetButton" >Tweet</Button>  
        </form>
    
    </div>
  )
}

export default Tweetbox