import React from 'react';
import Footer from '../Footer/Footer';
import './Location.css';
const Location = () => {
    return (
        <div >
            <div className="location-wrapper">
                <div className="container">
                    <div className="location-title">
                        <h3>LOKASI</h3>
                        <hr />
                        <p> Anda dapat menemukan kami di Yogyakarta dan Jakarta. Setiap toko memiliki suasana uniknya masing-masing, mari klik Semua Lokasi di bawah ini untuk mengetahui mana yang akan menjadi favorit Anda!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Location;
