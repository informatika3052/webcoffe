import React from 'react';
import './Footer.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterEnd, FooterSub } from './FooterPost';
const Footer = () => {
    return (
        <Router>
            <div className="Footers">
                <FooterSub />
                <FooterEnd />
            </div>
        </Router>
    )
}

export default Footer;
