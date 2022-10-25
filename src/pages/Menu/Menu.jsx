import React from 'react';
import Footer from '../Footer/Footer';
import './Menu.css';


import { MenuImage, ImageLarge } from './MenuImage';
import { MenuContent, MenuFood, MenuHeading } from './MenuHeading';

const Menu = () => {
    return (
        <div className="coffe-menu">
            <h2>Menu</h2>
            <div className="container">
                <MenuContent />
                <MenuHeading />
                <ImageLarge />
                <MenuFood />
                <MenuImage />
            </div>
            <Footer />
        </div>
    )
}

export default Menu;
