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
            <Link className='about-link text-hover-shadow' to='/about'>About</Link>
            <Link className='portfolio-link text-hover-shadow' to='/portfolio'>Portfolio</Link>
            <Link className='commissions-link text-hover-shadow' to='/commissions'>Commissions</Link>
            <Link className='contact-link text-hover-shadow' to='/contact'>Contact</Link>
            <Link className='tos-link text-hover-shadow' to='/tos'>ToS</Link>
        </div>
    )
}