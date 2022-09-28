import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import Footer from './Footer';
import NotFount from './NotFount';
import './Main.css';

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/product/:productId" element={<Product />}></Route>
                    <Route path="*" element={<NotFount />}></Route>
                </Routes>
                <Footer /> 
            </BrowserRouter>
        </div>
    );
}

export default App;