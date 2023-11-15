import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedUser    from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavouriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import PublishIcon  from '@mui/icons-material/Publish';
function Post({

username ,
verified , 
text , 
image , 
avatar,



}) {
  return (
    <div  className="post" > 
    <div className="post_avatar">  
    <Avatar  src = {avatar}>  </Avatar>
     </div>
     <div className="post_body"  > 
      <div  className="post_header " >
  <div className="post_headerText" >   
  <h3> {username} <span>
  {verified && <VerifiedUser  className="post_badge" />}
    </span> </h3>

  </div>
  <div  className="post_headerDescription" >
 <p> {text}  </p>
  </div>
      </div>
     <img  src={image} ></img> 
     <div  className="post_footer" > 
     <ChatBubbleOutlinedIcon  fontsize="small"  />
     <RepeatIcon  fontsize="small"  /> 
     <FavouriteBorderIcon  fontsize="small"  />
     <PublishIcon  fontsize="small"  />
     </div>
    
     </div>
    </div>
  )
}

export default Post