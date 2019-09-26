import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className='title-font'>
            <Link to='/about'>About</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/commission'>Commission</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/tos'>ToS</Link>
        </div>
    )
}