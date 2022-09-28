import React, { Component } from 'react';
import '../App.css';
const Main = (props) => {
    return (
        <ul>
            <li><h3>[선물세트] {props.name} <span className='item_percent'>{props.percentage}</span> {props.price}입니다.</h3></li>
        </ul>
    );
}

export default Main;