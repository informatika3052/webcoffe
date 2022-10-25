import React from 'react';
import food3 from '../Menu/img/food3.jpg';
import food1 from '../Menu/img/food1.jpg';
import food4 from '../Menu/img/food4.jpg';
// img
import drink1 from '../Menu/img/drink1.jpg';
import drink4 from '../Menu/img/drink2.jpg';
import food2 from '../Menu/img/food3.jpg';
const MenuImage = () => {
    return (
        <div className="menu-food-wrapper">
            <img src={food1} alt="" />
            <img src={food3} alt="" />
            <img src={food4} alt="" />
        </div>
    )
}

const ImageLarge = () => {
    return (
        <div className="image-warapper">
            <div className="image-warapper-1">
                <img src={food2} alt="" />
            </div>
            <div className="image-warapper-2">
                <img src={drink4} alt="" />
                <img src={drink1} alt="" />
            </div>
        </div>
    )
}
export { MenuImage, ImageLarge };
