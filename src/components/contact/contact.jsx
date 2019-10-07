import React, { useState, useRef } from 'react';
import axios from 'axios';
import './contact.css';

const formAction = "https://script.google.com/macros/s/AKfycby6B-borBIu1PEe6f9udp1cs8Sk-jPJBn2l_h4TZrEpYQZJ8OVx/exec";

export default (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ twitchName, setTwitchName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [ showForm, formToggle ] = useState(true);
    const [ afterMsg, setMsg ] = useState('');

    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const tNameRef = useRef(null);
    const emailRef = useRef(null);
    const descRef = useRef(null);
    const formBtnRef = useRef(null);

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
        formBtnRef.current.disabled = true;

        if (validateForm()) {
            axios.post(`https://cors-anywhere.herokuapp.com/${formAction}`,
            `first=${firstName}&last=${lastName}&twitch=${twitchName}&email=${email}&description=${desc}`,
            {
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(() => {
                formToggle(false);
                setMsg(<><p>Thank you for contacting me!</p><p>I will be reaching out soon.</p></>);
            }, () => {
                formToggle(false);
                    setMsg(<><p>Sorry, looks like something went wrong.</p><p>Please try again later.</p></>);
            });
        }
    }


    const contactForm = (
        <form className='contact-form' onSubmit={handleSubmit} method='POST' autoComplete="off">
            <label>Name <span className='red-text'>*</span></label>
            <div className='name-input-container'>
                <input className='first-name-input body-font' 
                    ref={fNameRef} type="text" 
                    name='first name' 
                    placeholder='first name' 
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)}
                    autoComplete="off"
                />
                <input className='last-name-input body-font' 
                    ref={lNameRef} type="text" 
                    name='last name' 
                    placeholder='last name' 
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)}
                    autoComplete='off'
                />
            </div>

            <label>Twitch</label>
            <input className='body-font' 
                ref={tNameRef} type="text" 
                name='twitch name' 
                placeholder='twitch name' 
                value={twitchName} 
                onChange={e => setTwitchName(e.target.value)}
                autoComplete='off'
            />

            <label>Email <span className='red-text'>*</span></label>
            <input className='body-font' 
                ref={emailRef} 
                type="email" 
                name='email' 
                placeholder='your email' 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                autoComplete='off'
            />

            <label>Description <span className='red-text'>*</span></label>
            <textarea className='body-font' 
                ref={descRef} cols="30" rows="8" 
                name='description' 
                placeholder='description...' 
                value={desc} 
                onChange={e => setDesc(e.target.value)}
                autoComplete='off'
            ></textarea>

            <button className='body-font' ref={formBtnRef}>Submit</button>
        </form>
    );

    return (
        <div className='contact page body-font'>
            <header className='page-header title-font'>Contact</header>
            <div className='contact-info'>
                <p>afluffyahri@gmail.com</p>
                <p>discord - Ahri#9097</p>
                <p>twitch.tv/afluffyahri</p>
            </div>
            {
                (showForm) ? contactForm :
                <div className='submit-message'>{afterMsg}</div>
            }
        </div>
    )
}