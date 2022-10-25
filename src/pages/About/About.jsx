import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './About.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Slider } from './ImageSlider';

const About = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    console.log(current);
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div>
            <div className="about-header">
                <div className="container">
                    <h2>SLOOP COFFE</h2>
                    <p>Sang Sloop Coffe adalah salah satu tempat untuk bersantai dan ngopi yang sedang naik daun di Indonesia. Modern, muda, dan selalu menghadirkan rasa baru untuk pelanggan setia mereka. Pada tahun 2017 mereka membuka toko pertamanya di Yogyakarta, dan kini pada tahun 2019 telah berkembang menjadi 4 toko di Yogyakarta dan 1 toko di Jakarta. Pelanggannya kebanyakan adalah kaum milenial, yang senang mendapatkan kopi yang cepat dan enak yang bisa mereka bawa kemana saja.</p>

                    <div className="image-slider">
                        {
                            Slider.map((slide, index) => {
                                return (
                                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                        {index === current && (
                                            <img src={slide.image} alt="imageSliiiderr" />
                                        )}
                                    </div>
                                )
                            })
                        }
                        <FaArrowAltCircleRight className="nextBtn" onClick={nextSlide} />
                        <FaArrowAltCircleLeft className="prevBtn" onClick={prevSlide} />

                    </div>
                </div>
            </div>
            <div className="skewed"></div>
            <Footer />
        </div>

    )

}

export default About;
