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
import './scroll.css';

export default (props) => {
    return (
        <div className='scroll'>
            <Link className='site-header title-font' to='/'>A Fluffy Ahri</Link>
            <Navbar />
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/commissions' component={Commission} />
                <Route path='/contact' component={Contact} />
                <Route path='/tos' component={ToS} />
                <Route path='/' component={Landing} />
            </Switch>
            <MediaBar />
        </div>
    )
}