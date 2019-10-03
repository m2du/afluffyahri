import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SampleBadges from './images/badges.png';
import SampleEmotes from './images/emotes.png';
import SamplePanels from './images/panels.png';
import './commission.css';

export default (props) => {
    const [ category, setCategory ] = useState('emotes');
    
    let pricingText;
    let sampleImage;
    switch (category) {
        case 'badges':
            sampleImage = SampleBadges;
            pricingText = (
                <>
                    <header className='pricing-header'>Bit badges:</header>
                    <ul className='pricing-list'>
                        <li>Solid colors - $10 each ( or 5 for $45 )</li>
                        <li>Diamond look - $15 each ( or 5 for $70 )</li>
                    </ul>
                </>
            );
            break;
        case 'emotes':
            sampleImage = SampleEmotes;
            pricingText = (
                <>
                    <header className='pricing-header'>Emotes:</header>
                    <ul className='pricing-list'>
                        <li>Resizing images - $5 each</li>
                        <li>Chibis - $20 each ( or 5 for $95 )</li>
                    </ul>
                </>
            );
            break;
        case 'panels':
            sampleImage = SamplePanels;
            pricingText = (
                <>
                    <header className='pricing-header'>Panels:</header>
                    <ul className='pricing-list'>
                        <li>Text only - $10 each</li>
                        <li>Chibi + Text - $25 each</li>
                        <li>Full drawing + Text - $40 each</li>
                        <li>(if design is complex, starting price is $40)</li>
                    </ul>
                </>
            );
            break;
        default: break;
    }

    const selectOption = (e, value) => {
        setCategory(value);
    };

    return (
        <div className='commission page body-font'>
            <header className='page-header title-font'>Commissions</header>
            <div className='commission-content'>
                <div className='instructions'>
                    <p>DM on Discord or email for orders.</p>
                    <p>๖ۣۜζ͜͡𝐀hri#9097 | afluffyahri@gmail.com</p>
                    <p>Accepting Paypal. Payment must be received in order to begin their drawing.</p>
                    <p>Please read <Link to='/tos'>ToS</Link> before submitting.</p>
                </div>
                <div className='commission-type'>Twitch Art</div>
                <div className='select-container'>
                    <div className='option text-hover-shadow' onClick={ e => selectOption(e, 'emotes')}>Emotes</div>
                    <div className='option text-hover-shadow' onClick={ e => selectOption(e, 'badges')}>Badges</div>
                    <div className='option text-hover-shadow' onClick={ e => selectOption(e, 'panels')}>Panels</div>
                </div>
                {pricingText}
                <img src={sampleImage} alt='Sample'/>
            </div>
        </div>
    )
}

