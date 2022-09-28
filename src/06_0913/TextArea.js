import React, { Component } from 'react';

class TextArea extends Component {
    state={
        description:"리액트에서는 내용을 value속성으로 작성하셔야 합니다."
    }
    render() {
        return (
            <>
                <form>
                    <h1>리액트에서 textarea폼태그 사용하기</h1>
                    <textarea rows='5' cols='50' value={this.state.description}></textarea>
                </form>
            </>
        );
    }
}

export default TextArea;