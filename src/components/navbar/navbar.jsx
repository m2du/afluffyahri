import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default (props) => {
    return (
        <div className='navbar title-font'>
            <Link to='/about'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/commission'>Commission</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/tos'>ToS</Link>
        </div>
    )
}