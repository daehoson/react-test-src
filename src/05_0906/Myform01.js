import React, { Component } from 'react';

class Myform01 extends Component {
    state = {
        name:'',
    }
    dataSubmit=(e)=>{
        e.preventDefault(); /** 이벤트를 제거 */
        alert('당신이 제출한 이름은 :'+this.state.name)
    }

    nameChange=(e)=>{
        this.setState({
            name: e.target.value
        }); 
    }
    render() {
        
        return (
            <form onSubmit={this.dataSubmit}>
                <h1>리액트 폼양식{this.state.name}</h1>
                <p>내용을 작성후 submit 버튼을 누르면 내용이 출력됩니다.</p>

                <p>이름을 입력하세요.</p>
                <input type="text" onChange={this.nameChange}/>
                <input type="submit" value="전송하기" />
                <ul>
                    <li>
                        e.target.value : 값에 접근하기
                    </li>
                    <li>
                        e.target.name : input 태그에 name 속성을 처리해서 객체에 접근
                    </li>
                    {/*<li>this.setState({[변수명]:값})</li>*/}
                </ul>
            </form>
        );
    }
}

export default Myform01;