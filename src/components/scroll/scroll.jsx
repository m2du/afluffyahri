import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Landing from '../landing/landing';
import About from '../about/about';
import Portfolio from '../portfolio/portfolio';
import Commission from '../commission/commission';
import Contact from '../contact/contact';
import ToS from '../tos/tos';
import MediaBar from '../mediabar/mediabar';
import ScrollBg from './scroll.png';
import './scroll.css';

export default (props) => {
    const backgroundStyle = {
        backgroundImage: `url(${ScrollBg})`,
        backgroundSize: 'auto 100%'
    };

    return (
        <div className='scroll' style={backgroundStyle}>
            <Link className='site-header title-font' to='/'>A Fluffy Ahri</Link>
            <div className='scroll-content disable-scrollbars'>
                <Navbar />
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/commissions' component={Commission} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/tos' component={ToS} />
                    <Route path='/' component={Landing} />
                </Switch>
            </div>
            {/* <MediaBar /> */}
            <div className='scroll-bottom'></div>
        </div>
    )
}