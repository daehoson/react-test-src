import React, { Component } from 'react';
import Child3 from './Child3';

class Parent2 extends Component {
    render() {
        return (
            <>
                <Child3 name="김철수" age="20" hobby="등산" />
                <hr />
                <Child3 name="이영희" age="24" hobby="영화보기" />
                <hr />
            </>
        );
    }
}

export default Parent2;