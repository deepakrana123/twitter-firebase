import React from 'react'
import "./Widget.css";
import SearchIcon from "@material-ui/icons/Search";


import { TwitterTimelineEmbed, TwitterShareButton, TwitterMentionButton,TwitterHashtagButton,
	
	TwitterTweetEmbed } from 'react-twitter-embed';




function Widgets() {
	return (
		<div className="widgets">
		<div className="widgets__input">
		<SearchIcon className="widgets__searchIcon"/>
		<input placeholder="Search Twitter" type="text"/>

		</div>
		<div className="widgets_widgetConatiner">
		<h1>what happenning</h1>
		
		<TwitterTimelineEmbed
		sourceType="profile"
		screenName="dev67596833"
		options={{height: 400}}
	  />
	  <TwitterTweetEmbed
  tweetId={'1339781794996965377'}
/>
<TwitterShareButton
    url={'https://facebook.com/devendrarana'}
    options={{ text: '#reactjs is awesome', via: 'devendra' }}
  />

  <TwitterMentionButton
  screenName={'dev67596833'}
/>
    <TwitterHashtagButton
      tag={'cybersecurity'}
            />
		</div>
		</div>
	)
}

export default Widgets;
