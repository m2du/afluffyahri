import React from 'react';
import TwitchIcon from './icons/twitch_icon.png';
import TwitterIcon from './icons/twitter_icon.png';
import TumblrIcon from './icons/tumblr_icon.png';
import YoutubeIcon from './icons/youtube_icon.png';
import StreamlabsIcon from './icons/streamlabs_icon.png';
import './mediabar.css';

export default (props) => {
    return (
        <div className='media-container body-font'>
            <a href='https://www.twitch.tv/afluffyahri' className='media-link'><img className='media-icon' src={TwitchIcon} alt='twitch.tv' /></a>
            <a href='https://twitter.com/AFluffyAhri' className='media-link'><img className='media-icon' src={TwitterIcon} alt='twitter.com' /></a>
            <a href='https://theforevernub.tumblr.com/' className='media-link'><img className='media-icon' src={TumblrIcon} alt='tumblr.com' /></a>
            <a href='https://www.youtube.com/user/TheForeverNub' className='media-link'><img className='media-icon' src={YoutubeIcon} alt='youtube.com' /></a>
            <a href='https://streamlabs.com/afluffyahri/merch' className='media-link'><img className='media-icon' src={StreamlabsIcon} alt='streamlabs.com' /></a>
        </div>
    )
}