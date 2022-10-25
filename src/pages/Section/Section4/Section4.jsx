import React, { useState, useEffect } from 'react';
import './Section4.css';
import afif from '../Section4/img/afif.png';

function Section4() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="feedback-wrapper">
            <div className="container">
                <h3 className="blook">Feedback Pelanggan</h3>
                <div className="feedback-title">
                    <div className="feedback-1" style={{ transform: `translateY(-${offsetY * -0.05}px)` }}
                    >
                        <img src={afif} alt="" />
                    </div>
                    <div className="feedback-2" style={{ transform: `translateY(${offsetY * 0.01}px)` }}
                    >
                        <h4>Tempat ini itu ??</h4>
                        <p>Tempat yang cukup enak untuk bersantai.Juga bisa digunakan untuk meeting maupun mengerjakan tugas kantor .Pelayanan baik dari para pegawainya.</p>
                        <p className="afif">--Putri Maulida--</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4;



