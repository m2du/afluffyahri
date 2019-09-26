import React from 'react';
import TwitchIcon from './icons/twitch_icon.png';
import TwitterIcon from './icons/twitter_icon.png';
import TumblrIcon from './icons/tumblr_icon.png';
import YoutubeIcon from './icons/youtube_icon.png';
import StreamlabsIcon from './icons/streamlabs_icon.png';
import './about.css';

export default (props) => {
    return (
        <div className='about body-font'>
            {/* <header className='title-font'>A Fluffy Ahri</header> */}
            <p className='body-font'>
                <pre>&#9;</pre>Hello! I am Ahri or A Fluffy Ahri. I am an Artist and Streamer. 
                I have been drawing ever since I was able to hold a pencil. I have a major in Illustration, comic books. 
                My dream is to one day become a successful content creator as well as providing great art.</p>
            <p className='body-font'>
                <pre>&#9;</pre>Many people wondered where I got my name from, and yes it's from a game called League of Legends. 
                League of Legends has a character name Ahri. Ahri is one of my favorite characters that I love to play with. 
                My friends and I would have this rule in our name where we would have "A Adjective Noun" as our names. 
                At the start of my streaming carrer I only wanted to stream League of Legends, but the game became very toxic after 7 years of playing.
            </p>
            <p className='body-font'>
                <pre>&#9;</pre>I have been streaming ever since January 2017. My goal as a Streamer is to grow a nice playful supportive community, and one day become partnered. 
                I stream many different kind of games, from FPS to MOBAs to MMORPG. Anyone is welcomed to come and watch, I love to interact and play with my viewers.
            </p>
            <div className='media-container'>
                <a href='https://www.twitch.tv/afluffyahri' className='media-link'><img className='media-icon' src={TwitchIcon} alt='twitch.tv' /> /afluffyahri</a><pre>&emsp;&emsp;&emsp;&emsp;</pre>
                <a href='https://twitter.com/AFluffyAhri' className='media-link'><img className='media-icon' src={TwitterIcon} alt='twitter.com' /> @AFluffyAhri</a><pre>&emsp;&emsp;&emsp;&emsp;</pre>
                <a href='https://theforevernub.tumblr.com/' className='media-link'><img className='media-icon' src={TumblrIcon} alt='tumblr.com' /> theforevernub</a><pre>&emsp;&emsp;&emsp;&emsp;</pre>
                <a href='https://www.youtube.com/user/TheForeverNub' className='media-link'><img className='media-icon' src={YoutubeIcon} alt='youtube.com' /> TheForeverNub</a><pre>&emsp;&emsp;&emsp;&emsp;</pre>
                <a href='https://streamlabs.com/afluffyahri/merch' className='media-link'><img className='media-icon' src={StreamlabsIcon} alt='streamlabs.com' /> Merch</a>
            </div>
        </div>
    )
}