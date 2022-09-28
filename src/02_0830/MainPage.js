import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />  
            </>
        );
    }
}

export default MainPage;