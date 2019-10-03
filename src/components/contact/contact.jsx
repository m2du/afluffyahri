import React, { useState } from 'react';
import './contact.css';

export default (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ twitchName, setTwitchName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ desc, setDesc ] = useState('');

    return (
        <div className='contact page body-font'>
            <header className='page-header title-font'>Contact</header>
            <div className='contact-info'>
                <p>afluffyahri@gmail.com</p>
                <p>discord - Ahri#9097</p>
                <p>twitch.tv/afluffyahri</p>
            </div>
            <form className='contact-form' onSubmit={e => e.preventDefault()}>
                <label>Name <span className='red-text'>*</span></label>
                <div className='name-input-container'>
                    <input className='first-name-input body-font' type="text" placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input className='last-name-input body-font' type="text" placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <label>Twitch</label>
                <input className='body-font' type="text" placeholder='twitch name' value={twitchName} onChange={e => setTwitchName(e.target.value)} />
                <label>Email <span className='red-text'>*</span></label>
                <input className='body-font' type="email" placeholder='your email' value={email} onChange={e => setEmail(e.target.value)} />
                <label>Description <span className='red-text'>*</span></label>
                <textarea className='body-font' cols="30" rows="8" onChange={e => setDesc(e.target.value)}>{desc}</textarea>
                <button className='body-font'>Submit</button>
            </form>
        </div>
    )
}