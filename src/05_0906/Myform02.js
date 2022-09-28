import React, { Component } from 'react';

class Myform02 extends Component {

    state = {
        name:'',
        age:null
    }
    nameChange = (e) =>{
        let n =e.target.name;
        let v =e.target.value;
        this.setState({
            [n] : v
        });
    }
    render() {
        return (
            <form >
                <h1>당신의 이름은 {this.state.name}이고 나이는 {this.state.age}입니다.</h1>
                <h1>당신의 취미는 {this.state.hobby}입니다.</h1>
                <p>이름과 나이를 입력하면 h1태그에 자동으로 대입되어 문자 출력하기</p>
                <p>이름을 입력하세요.</p>
                <input type="text" name="name" onChange={this.nameChange} />
                <p>나이를 입력하세요.</p>
                <input type="text" name="age" onChange={this.nameChange} />
                <p>취미를 입력하세요.</p>
                <input type="text" name="hobby" onChange={this.nameChange} />

            </form>
        );
    }
}

export default Myform02;