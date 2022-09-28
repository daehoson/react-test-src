import React, { Component } from 'react';


class App extends Component{
    state = {
        name: "",
        age: null,
        errormessage:''
    }

    nameChange = (e) =>{
        let n = e.target.name;
        let v = e.target.value;
        let err = '';
        if(n === 'age'){
            if(v !=="" && !Number(v)){
                err = <strong>나이는 숫자로 입력해야 합니다.</strong>
            }
        }
        this.setState({errormessage:err});
        this.setState({[n]:v});
        
    }

    render() {
        //스타일 선언하기
        const style = {
            color:'#f00',
            background:'#ffff00'
        }
        return (
            <>
                <form>
                    <h1>나의 이름은 {this.state.name}이고 나이는 {this.state.age}세 입니다.</h1>
                    <p>이름과 나이를 입력하세요.</p>
                    <p><input type="text" name="name" onChange={this.nameChange} /></p>
                    <p><input type="text" name="age" onChange={this.nameChange} /></p>
                    <br/>
                    <button type="submit">전송</button>
                    <p>이름과 나이를 정확하게 입력하면 출력이 잘되고, 나이를 숫자가 아닌 문자로 입력하면 에러가 뜬다.</p>
                    <span style={style}>{this.state.errormessage}</span>
                </form>
            </>
        );
    }
}

export default App;