import React , {useState} from 'react';

function InputTest(props) {
    //스타일 서식
    const style ={
        width:"500px",
        padding:"10px",
        margin:"10px",
        border:"3px solid #ff0000"
    }
    const [inputs, setInputs] = useState({
        username:'',
        userid:''
    })
    const {username,userid} = inputs;
    const onDataChange = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value,
        });
    }
    //데이터 초기화
    const onDataReset = () =>{
        setInputs({
            username:"",
            userid:""
        });
    }
    return (
        <div style={style}>
            <h2>여러 데이터 입력값 출력하기</h2>
            <input 
                type="text"
                placeholder='이름을 입력하세요'
                name="username"
                onChange={onDataChange}
                value={username}
            />
            <input 
                type="text"
                placeholder='아이디를 입력하세요'
                name="userid"
                onChange={onDataChange}
                value={userid}
            />
            <button onClick={onDataReset}>데이터 초기화</button>
            <h3>값:{username}({userid})</h3>
        </div>
    );
}

export default InputTest;