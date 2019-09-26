import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Landing from '../landing/landing';
import About from '../about/about';
import Portfolio from '../portfolio/portfolio';
import Commission from '../commission/commission';
import Contact from '../contact/contact';
import ToS from '../tos/tos';

export default (props) => {
    return (
        <div>
            <Link className='title-font' to='/'>A Fluffy Ahri</Link>
            <Navbar />
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/commission' component={Commission} />
                <Route path='/contact' component={Contact} />
                <Route path='/tos' component={ToS} />
                <Route path='/' component={Landing} />
            </Switch>
        </div>
    )
}