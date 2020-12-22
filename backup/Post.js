import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Post.css";


function Post({imageUrl,caption,username}) {
	return (
		<div className="post">
		<div className="post_header">
		<Avatar
		className="post_Avatar"
		 src="https://i.pinimg.com/564x/70/95/32/70953249200415f27952fa4be9c166c5.jpg"
		alt="Rafi qazi"
		/>
			<h1>{username}</h1>
			</div>
			<img className="post_image" src={imageUrl} alt=""/>
		<h4 className="post_text"><strong>{username}</strong>{caption}</h4></div>
	)
}

export default Post
