import React from 'react';
import './tos.css';

export default (props) => {
    return (
        <div className='tos page body-font'>
            <header className='page-header title-font'>
                Terms of Service
                <div className='small title-font'>Please read before requesting a commission.</div>
            </header>
            <ul className='tos-list'>
                <li>> Prices are in USD. No refunds.</li>
                <li>> Payments must be made before starting commissions.</li>
                <li>> Complete reworks of a commission will be charged as a new piece.</li>
                <li>> Commissions are for personal use only ( Twitch / Discord / stream ).</li>
                <li>> I retain the rights to use/submit the artwork for self-promotional or portfolio use.</li>
                <li>> I may stream the commission unless client states otherwise.</li>
                <li>> By commissioning me, you agree to the above terms of service.</li>
            </ul>
        </div>
    )
}