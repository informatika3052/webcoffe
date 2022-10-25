import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, About, Menu, Location, Slider } from '../../pages';
import './Navbar.css';
import ig from './logo.png';
const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><img src={ig} alt="" /></li>
                    <li><Link to="/Location">Location</Link></li>
                    <li><Link to="/Menu">Menu</Link> </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/">
                    <Header />
                </Route>
                <Route path="/About">
                    <About slides={Slider} />
                </Route>
                <Route path="/Menu">
                    <Menu />
                </Route>
                <Route path="/Location">
                    <Location />
                </Route>
            </Switch>
        </Router>
    )
}
export default Navbar;