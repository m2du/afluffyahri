import React, { useState, useRef } from 'react';
import './contact.css';

export default (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ twitchName, setTwitchName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ desc, setDesc ] = useState('');

    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const tNameRef = useRef(null);
    const emailRef = useRef(null);
    const descRef = useRef(null);

    const validateForm = () => {
        fNameRef.current.classList.remove('invalid');
        lNameRef.current.classList.remove('invalid');
        emailRef.current.classList.remove('invalid');
        descRef.current.classList.remove('invalid');

        let valid = true;

        if (fNameRef.current.value === '') {
            valid = false;
            fNameRef.current.classList.add('invalid');
        }

        if (lNameRef.current.value === '') {
            valid = false;
            lNameRef.current.classList.add('invalid');
        }

        if (emailRef.current.value === '') {
            valid = false;
            emailRef.current.classList.add('invalid');
        }

        if (descRef.current.value === '') {
            valid = false;
            descRef.current.classList.add('invalid');
        }

        return valid;
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (validateForm()) {
            // send email
        }
    }


    return (
        <div className='contact page body-font'>
            <header className='page-header title-font'>Contact</header>
            <div className='contact-info'>
                <p>afluffyahri@gmail.com</p>
                <p>discord - Ahri#9097</p>
                <p>twitch.tv/afluffyahri</p>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <label>Name <span className='red-text'>*</span></label>
                <div className='name-input-container'>
                    <input className='first-name-input body-font' ref={fNameRef} type="text" placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input className='last-name-input body-font' ref={lNameRef} type="text" placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <label>Twitch</label>
                <input className='body-font' ref={tNameRef} type="text" placeholder='twitch name' value={twitchName} onChange={e => setTwitchName(e.target.value)} />
                <label>Email <span className='red-text'>*</span></label>
                <input className='body-font' ref={emailRef} type="email" placeholder='your email' value={email} onChange={e => setEmail(e.target.value)} />
                <label>Description <span className='red-text'>*</span></label>
                <textarea className='body-font' ref={descRef} cols="30" rows="8" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                <button className='body-font'>Submit</button>
            </form>
        </div>
    )
}