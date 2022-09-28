import React, { Component } from 'react';
import './App.css';

const info = [
    {id:"admin", password:"1111", name:"관리자"},
    {id:"guest1", password:"2222", name:"유재석"},
    {id:"guest2", password:"3333", name:"아이유"}
];
class Mywork01 extends Component {
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
    loginAction = (e) =>{
        let id = document.getElementById('inputId').innerText
        let pw = document.getElementById('inputPw').innerText
        let inform = info.filter(inform => inform.id == id);

        if(!id){
            alert("아이디를 입력해주세요.");
            return false;
        }else if(!pw){
            alert("패스워드를 입력해주세요.")
            return false;
        }else if(!inform.length){
            alert("아이디가 존재하지 않습니다.");
            return false;
        }else if(inform[0].password != pw){
            alert("비밀번호가 틀립니다.");
            return false;
        }else{
            alert("로그인 성공");
        }
    }
    createAction = (e) =>{
        alert("회원가입은 준비중입니다.");
    }
    render() {
        return (
            <div>
                <div>
                    <h1 className='title'>Kurly</h1>
                </div>
                    <div className='formAll'>
                        <div className='loginTitle'>로그인</div>
                        <form >
                            <div className='textBoxBig'>
                                <div className='textBoxMid'>
                                    <div>
                                        <input className='textbox' type="text" name="id" onChange={this.nameChange} 
                                         placeholder="아이디를 입력해주세요." autoComplete="off"/>
                                    </div>
                                </div>
                                <div className='textBoxMid'>
                                    <div>
                                        <input className='textbox' type="password" name="password" onChange={this.nameChange}
                                         placeholder="비밀번호를 입력해주세요." autoComplete="off"/>
                                    </div>
                                </div>
                                <div className='searchInfo'>
                                    <a href="#">아이디찾기</a>
                                    <span>|</span> 
                                    <a href="#">비밀번호찾기</a> 
                                </div>
                                <div className='actionButtonBox'>
                                    <button className='loginButton' onClick={this.loginAction} type='button' radius="3" height="54">로그인</button>
                                    <button className='createButton' onClick={this.createAction} type='button' radius="3" height="54">회원가입</button>
                                </div>
                            </div>
                        </form>
                        <div className='formInput'>
                            <div>
                                입력한 아이디 : 
                            </div>
                            <span id='inputId' value={this.state.id}>{this.state.id}</span>
                            <div>
                                입력한 비밀번호 : 
                            </div>
                            <span id='inputPw' value={this.state.password}>{this.state.password}</span>
                        </div>
                </div>
            </div>
        );
    }
}

export default Mywork01;