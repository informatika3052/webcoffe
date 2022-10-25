import React, { useState, useEffect } from 'react';
import './Section2.css';
import wrapper1 from './wrapper1.png';
import wrapper2 from './wrapper2.png';

function Section2() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="wrapper">
            <div className="container">

                <h2 style={{ transform: `translateY(${offsetY * 0.4}px)` }} >Sloop Coffe</h2>

                <div className="wrapper-satu" style={{ transform: `translateY(-${offsetY * 0.1}px)` }} >
                    <div className="img-wrapper-satu"  >
                        <img src={wrapper1} alt="" />
                    </div>
                    <div className="wrapper-title" >
                        <h3>Tempat nyaman untuk beristirahat</h3>
                        <p>Bernuansa sejuk dengan memberikan <br />suasana  yang menyenangkan untuk meminum kopi. <br /> Memberikan keseruan tersendiri ketika anda ingin melepas penat.</p>
                        <button className="btn-wrapper-satu">Pesan Sekarang</button>
                    </div>
                </div>
                <div className="wrapper-satu wrapper-dua ">
                    <div className="wrapper-title wrapper-title-2">
                        <h3>Lokasi yang mudah dijangkau</h3>
                        <p>Lokasi yang mudah dijangkau namun tetap menjaga suasana santai untuk memberikan kenyamanan pembeli.Juga untuk berkumpul dengan teman dan juga berdiskusi.</p>
                        <button className="btn-wrapper-satu">Pesan Sekarang</button>
                    </div>
                    <div className="img-wrapper-dua img-wrapper-satu ">
                        <img src={wrapper2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;
