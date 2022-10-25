import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';

import Section2 from '../Section/Section2/Section2';
import Section3 from '../Section/Section3/Section3';
import Section4 from '../Section/Section4/Section4';
import HeaderPost from './HeaderPost';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <HeaderPost />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
            </Fragment>
        )
    }
}

export default Header;