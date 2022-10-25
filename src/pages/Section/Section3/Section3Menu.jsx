import React from 'react';
import './Section3.css';

const Section3Menu = (props) => {
    return (
        <div className="menu-sub">
            <h2>{props.name}</h2>
            <p>{props.title}</p>
            <div className="img-wrepper">
                <img src={props.images} alt="" />
            </div>
            <h3>{props.idr}</h3>
        </div>
    )
}

export default Section3Menu;
