import React, { Component } from 'react';

class Father extends Component {
    render() {
        return (
            <>
                <h3>Father 데이터</h3>
                <hr/>
                <div>{this.props.children}</div>    
            </>
        );
        /**
         * {Child.js}를 불러온적이 없지만 [Grand.js]가 지정해준 자손이어서 자손의 데이터로 끌어올 수 있습니다.
         * [this.props]는 부모컴포넌트가 자손 컴포넌트에 내려주는 값으로 부모 컨포넌트가 자손으로 [Child.js]를 연결해줬습니다.
         * [children]을 통해서 부모가 지정해준 자손의 값을 불러올 수 있습니다.
         */
    }
}

export default Father;