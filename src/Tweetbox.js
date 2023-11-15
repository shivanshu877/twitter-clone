import React from 'react' ;
import './Tweetbox.css';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
function Tweetbox() {
  return (
    <div className="tweetBox"   > 
    <form   >
         <div  className=" tweetBox_input">
         <Avatar  src="https://d31ezp3r8jwmks.cloudfront.net/rrggk40pbkppfi0tas3j73qr4lub" ></Avatar>
          <input placeholder="What's happening? " />
          <input  placeholder= "Enter image url "/>
         </div>
         <Button variant='contained' className="tweetBox_tweetButton" >Tweet</Button>  
        </form>
    
    </div>
  )
}

export default Tweetbox