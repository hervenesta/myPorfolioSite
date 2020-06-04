import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Footer from './Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <LandingPage />
                <Footer />
            </div>
        )
    }
}


export default Home;