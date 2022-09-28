import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        const {name, age, hobby} = this.props;
        return (
            <>
            {/* 비 할당구조 방식으로 변경함. */}
                <h3>이름 : {name}</h3>
                <h3>나이 : {age}</h3>
                <h3>취미 : {hobby}</h3>
            </>
        );
    }
}

export default Child2;