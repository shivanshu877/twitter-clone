import React, { useEffect, useState } from 'react'
import './Feed.css';
import Post from './Post' ;
import db from './Firebase'; 
import Tweetbox from './Tweetbox';
function Feed() {
  const [posts, setPosts] = useState([]) ;
  useEffect ( () => {
     db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
     ))
  },[]);
  return (
    <div className="feed">
    <div className = "feed_header" >
 <h2>  Home</h2>
    </div>
    <Tweetbox />
     
     {posts.map(post => (

      <Post 
      username = {post.username}
verified  = {post.verified}  
text  = {post.text}
image =  {post.image}
avatar = {post.avatar}
      /> 
     ))}
    </div>
  )
}

export default Feed