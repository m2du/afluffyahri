import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Navbar from '../navbar/navbar';
// import Landing from '../landing/landing';
import About from '../about/about';
import Portfolio from '../portfolio/portfolio';
import Commission from '../commission/commission';
import Contact from '../contact/contact';
import ToS from '../tos/tos';
// import MediaBar from '../mediabar/mediabar';
import ScrollBg from './scroll.png';
import SplashScroll from './splash_scroll.png';
import CoatOfArms from './coat_of_arms.png';
import './scroll.css';

const Scroll = (props) => {
    const image = props.location.pathname === '/' ? SplashScroll : ScrollBg;
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'auto 100%'
    };

    return (
        <div className='scroll' style={backgroundStyle}>
            <div className='scroll-content disable-scrollbars'>
                <Link className='coat-of-arms' to='/'>
                    <img src={CoatOfArms} alt=''></img>
                </Link>
                <Navbar />
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/commissions' component={Commission} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/tos' component={ToS} />
                </Switch>
            </div>
            {/* <MediaBar /> */}
            <div className='scroll-bottom'></div>
        </div>
    )
}

export default withRouter(Scroll);