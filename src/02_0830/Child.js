import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <>
                <h3>이름 : {this.props.name}</h3>
                <h3>나이 : {this.props.age}</h3>
                <h3>취미 : {this.props.hobby}</h3>
            </>
        );
    }
}

Child.defaultProps = {
    name : '강감찬',
    age : 20,
    hobby : '코딩'
}

export default Child;