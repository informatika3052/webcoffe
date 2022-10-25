import React, { useState, useEffect } from 'react';
import '../Section2/Section2.css';
import './Section3.css';
import iconSearch from '../Section3/img/icon-search.svg';
import Section3Menu from './Section3Menu';
import menu1 from './img/menu1.png';
import menu2 from './img/menu2.png';
import menu3 from './img/menu3.png';
function Section3() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="section-3">
            <div className="container">
                <div className="sec-bar">
                    <div className="fav-menu-title">
                        <h3>Favorite Menu</h3>
                    </div>
                    <div className="fav-search-bar">
                        <h5>Cari Menu</h5>
                        <div className="input-menu">
                            <input type="text" />
                            <button>
                                <img src={iconSearch} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="menu" style={{ transform: `translateY(-${offsetY * 0.15}px)` }}>
                    <Section3Menu
                        name="Kopi Klatuk"
                        title="Kopi yang dibuat dari biji yang khusus tidak digiling secara halus. Guna memberi rasa yang khas untuk pecinta kopi."
                        images={menu1}
                        idr="IDR  : 8K"
                    />
                    <Section3Menu
                        name="Lemon with Full Cream"
                        title="Jus lemon dipercaya mampu menghancurkan racun di dalam tubuh dan menjadi detox yang lebih baik.Jadi Detox alami Jadi yang menyehatkan tubuh, detox yang lebih baik. menyehatkan tubuh "
                        images={menu3}
                        idr="IDR  : 8K"
                    />
                    <Section3Menu
                        name="Roti Bakar Asam Manis"
                        title="Di cuaca yang agak mendung begini, .Takpaling enak makan roti bakar. sore atau malam saja sebagai camilan.Dengan rasa spesial dan unik.Salah satu menu roti bakar yang sering dibuat yakni roti bakar ASAM MANIS."
                        images={menu2}
                        idr="IDR  : 15K"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section3;
