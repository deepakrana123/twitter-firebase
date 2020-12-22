import React from 'react';
import "./Sidebar.css";
import SidebaOption from "./SidebaOption";
import TwitterIcon from "@material-ui/icons/Twitter"
import { Button } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
function Sidebar() {
	return (
		<div className="sidebar">
		{/* twitter */}
		{/* sidebaroption */}
		<TwitterIcon className="twitter_icon"/>
		
		<SidebaOption active title="Home" Icon={HomeIcon}/>
			
		<SidebaOption title="Search" Icon={SearchIcon}/>
		<SidebaOption title="Mail" Icon={MailOutlineIcon}/>
		<SidebaOption title="Notification" Icon={NotificationImportantIcon}/>
		<SidebaOption title="Bookmark" Icon={BookmarkBorderIcon}/>
		<SidebaOption title="Profile" Icon={PermIdentityIcon}/>
		<SidebaOption title="More" Icon={MoreHorizIcon}/>
		
		<Button variant="outlined" className="sidebar__tweet" fullwidth>Tweet</Button>
			
		</div>
	)
}

export default Sidebar;
