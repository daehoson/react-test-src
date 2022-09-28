import React, { Component } from 'react';

class Myform extends Component {
    state = {
        name:'',
    }
    nameChange=(e)=>{
        this.setState({
            name: e.target.value
        });
    }
    render() {
        let header='';
        if(this.state.name){ // state값이 있을 경우 아래 내용 실행하고
            header=<h1>Hello {this.state.name}</h1>;
        }else{ // state값이 없을 경우는 출력하지 않는다.
            header="";
        }
        return (
            <form>
                {/*<h1>리액트 폼양식{this.state.name}</h1>*/}
                {header}
                <p>HTML에서와 마찬가지로 React는 사용자가 웹 페이지와 상호 작용할 
                    수 있도록 Form을 사용합니다.</p>
                <p>input태그의 값이 변경되면(onChange) h1태그의 텍스트도 변경하는 
                    컴포넌트를 만들어보겠습니다.</p>
                <p>이름을 입력하세요.</p>
                <input type="text" onChange={this.nameChange}/>
                <ul>
                    <li>nameChange함수에 작성된 [e.target.value]는 이벤트를
                        받는 DOM의 value값을 받아오는 구문입니다.
                    </li>
                    <li>
                        [e]는 이벤트 객체를 받는 매개변수 , 그 타겟의 value값을
                        받아오는 JS적 문법입니다.
                    </li>
                    <li>
                        state 자신의 컴포넌트에서 변하는 값을 저장하는 곳입니다.
                    </li>
                    <li>setState()함수는 state값을 변경시키는 함수입니다.</li>
                </ul>

            </form>
        );
    }
}

export default Myform;