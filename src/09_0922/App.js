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
            <h2>React Router Dom</h2>
            <p>사용자가 요청한 url에 따라 해당url에 맞는 페이지를 보여주는것.</p>
            <p>라우팅 관련 라이브러리 중에 react router dom을 가장 많이 사용.</p>
            <p>리액트는 spa를 제작하기에 최적화된 언어이며, 여러개의 페이지를 사용하여, 새로운 페이지를 로드하는 방식이다.</p>
            <p>새로운 페이지를 로드하지 않고, 하나의 페이지 안에서 필요한 데이터만(컴포넌트)만 가져오는 형태이다.</p>
            <p>리액트 라우터는 신규페이지를 불러오지 않은 상황에서 각각의 url에 따라 선택된 데이터를 하나의 
            페이지에서 렌더링해주는 라이브러리라고 볼 수 있다.</p>
            <p>라우터에서 가장 많이 사용하는 BrowserRouter, HashRouter를 사용해본다.</p>   
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