import React, { Component } from 'react';
import './Ref.css'

class Ref extends Component {
    state = {
        password:"",
        clicked:false,
        validated:false,
    }
    // 패스워드 박스에 내용을 입력시 출력되는 함수
    onInputChange = (e) =>{
        this.setState({
            password:e.target.value
        });
    }
    // 검증하기 버튼을 클릭하면 호출되는 함수 = 패스워드가 맞는지 확인
    onInputClick = (e) =>{
        this.setState({
            clicked:true,
            validated:this.state.password == '1234'
        })
        this.input.focus();
    }
    render() {
        return (
            <>
                <h2>ref함수</h2>
                <p>ref는 개발자가 특정 DOM을 선택해야하는 상황이 발생될 때 사용하는 기능으로
                    클래스 컴포넌트에서 사용합니다.</p>
                <p>제이쿼리에서 DOM을 선택할 때는 [getElementById] 혹은 
                    [querySelector]를 사용합니다.</p>    
                <p>특정 input태그에 포커스, 스크롤박스 조작, canvas요소에 그림그리기....</p>
                <input type="password" 
                       value={this.state.password} 
                       onChange={this.onInputChange}
                       className={this.state.clicked ? 
                        (this.state.validated ?'success':'failure'):''}
                       ref={(ref) => this.input = ref}
                />
                <button onClick={this.onInputClick}>검증하기</button>
                <p>검증하기 버튼을 클릭하면 매번 input 태그로 focus가 이동되는 것을 확인할 수 있다.</p>
            </>
        );
    }
}

export default Ref;