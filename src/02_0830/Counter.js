import React, { Component } from 'react';

class Counter extends Component {
    state = {
        num : 0
    }
    //1씩 증가하는 함수
    onPlus = () => {
        // setState 함수는 state의 값을 변경할 때 사용하는 함수
        this.setState({
            num : this.state.num+1
        });
    }

    //1씩 증가하는 함수
    onMinus = () => {
        this.setState({
            num : this.state.num-1
        });
    }

    render() {
        return (
            <>
                <h2>{this.state.num}</h2> {/** 변할 값인 state 중 num 선택 */}
                <button onClick={this.onPlus}>+</button> {/** 증가하는 함수 */}
                <button onClick={this.onMinus}>-</button> {/** 감소하는 함수 */}
            </>
        );
    }
}

export default Counter;