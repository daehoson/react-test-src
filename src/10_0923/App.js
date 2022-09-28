import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Day from './Day';
import DayList from './DayList';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFount from '../HomeWork/NotFount';

function App(props) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<DayList />} />
                <Route path='/day/:day' element={<Day />} />
                <Route path='*' element={<NotFount />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;