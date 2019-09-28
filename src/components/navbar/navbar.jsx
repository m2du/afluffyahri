import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from './Banner.png';
import './navbar.css';

export default (props) => {
    const bannerStyle = {
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '100%'
    };

    return (
        <div className='navbar title-font' style={bannerStyle}>
            <Link className='about-link' to='/about'>About</Link>
            <Link className='portfolio-link' to='/portfolio'>Portfolio</Link>
            <Link className='commissions-link' to='/commissions'>Commissions</Link>
            <Link className='contact-link' to='/contact'>Contact</Link>
            <Link className='tos-link' to='/tos'>ToS</Link>
        </div>
    )
}