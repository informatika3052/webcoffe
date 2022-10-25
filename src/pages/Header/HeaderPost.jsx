import React from 'react'
import './Header.css';
import vector from './Vector1.svg';

const HeaderPost = () => {
    return (
        <div className="header">
            <div className="header-clue">
                <img src={vector} alt="" />
                <h2 >Jalanin Harimu Dengan Senyuman</h2>
                <button >Pesan Sekarang</button>
            </div>
        </div>
    )
}

export default HeaderPost;
