import React, { Component } from 'react';
import Child from './Child';
import Item from './Item';
class Parent extends Component {
    render() {
        return (
            <>
                <Child name="홍길동" age="30" hobby="운동" />
                <hr />
                <Child name="홍길동" age="30" hobby="운동" />
                <hr />
                <Child />
                <hr />
                <Item image="상품1" title="원양산오징어" price="5.200" />
                <hr />
                <Item image="식빵2" title="식빵" price="5.200" />
                <hr />
            </>
        );
    }
}

export default Parent;