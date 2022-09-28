import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../App.css';

function App01(){
    return(
        <div>
            <h1>함수형 컴포넌트와 클래스형 컴포넌트 출력하기</h1>
            <FuncComp initNumber={2022}></FuncComp>
            <ClassComp initNumber={2022} name='손흥민' age='30' hobby='축구'>
            </ClassComp>
            <Parent></Parent>
        </div>
    );
}

function FuncComp(props){
    return(
        <div>
            <h2>함수형 콤포넌트 만들기</h2>
            <p>Number : {props.initNumber}</p>
        </div>
    );
}

class ClassComp extends React.Component{
    state = {
        number : this.props.initNumber,
        name : this.props.name,
        age : this.props.age,
        hobby : this.props.hobby,

    }
    render(){
        return(
            <div>
                <h2>클래스형 컴포넌트 입니다.</h2>
                <p>Number : {this.state.number}</p>
                <p>name : {this.state.name}</p>
                <p>age : {this.state.age}</p>
                <p>hobby : {this.state.hobby}</p>
            </div>
        );
    }
}

class Parent extends Component{
    render(){
        return(
            <>
                <Child className="txt_color01" name="김철수" age="20" hobby="축구"></Child>
            </>
        );
    }
}

class Child extends Component{
    render(){
        return(
            <>
                <h2>부모 컴포넌트 출력하기</h2>
                <h3>이름 : {this.props.name}</h3>
                <h3>나이 : {this.props.age}</h3>
                <h3>취미 : {this.props.hobby}</h3>
            </>
        );
    }
}
export default App01;