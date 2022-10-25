
import logos from '../../containers/Navbar/logo.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useState } from 'react';

const PostList = [
    {
        title1: 'HomePage',
        title2: 'Story',
        title3: 'Menu',
    },
    {
        title1: 'Locations',
        title2: 'Merchandise',
        title3: 'MenuStore',
    },
    {
        title1: 'Contacts',
        title2: 'oaoe81@gmail.com',
        title3: 'sloop86@gmail.com',
    },
    {
        title1: 'Socials',
        title2: 'renoenol48',
        title3: 'RenaldiSangSloop',
    }
]

const FooterSub = () => {
    return (
        <Router>
            <div className="footer-kids">
                <div className="foo-img">
                    <img src={logos} alt="" />
                </div>
                {
                    PostList.map((value, index) => {
                        return (
                            <ul key={index}>
                                <li><Link to="">{value.title1} </Link ></li>
                                <li><Link to="">{value.title2}</Link ></li>
                                <li><Link to="">{value.title3}</Link ></li>
                            </ul>
                        )
                    })
                }

            </div>
        </Router>
    )
}

const FooterEnd = () => {

    // Button Scroll Top
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        console.log(window.pageYOffset);
        if (!showScroll && window.pageYOffset > 20) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 20) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="footer-end">
            <ul>
                <li>November 2020</li>
                <li>Design Development by SangSloop</li>
            </ul>
            <FaRegArrowAltCircleUp className="btn-scroll" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} />
        </div>
    )
}


export { FooterSub, FooterEnd };
