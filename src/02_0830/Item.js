import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <>
                <h3>상품 : {this.props.image}</h3>
                <h3>제목 : {this.props.title}</h3>
                <h3>가격 : {this.props.price}</h3>
            </>
        );
    }
}

export default Item;