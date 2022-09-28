import React, {useState} from 'react';

function InputTest(props) {
    const style={
        width:'300px',
        padding:'10px',
        border:'3px solid #0000ff',
    }
    
    const [text, setText]=useState(''); // 기본값을 0으로 처리한다.
    //
    const onTextChange=(e)=>{
        setText(e.target.value); // 이벤트를 받은 타겟의 value값으로 변경한다.
    }

    // state값을 초기화 시키는 함수
    const onDateRest = () =>{
        setText("");
    }
    return (
        <div style={style}>
            <h2>텍스트 박스를 만들어서 내용 입력하고 '리셋'시 초기화 하기</h2>
            <input type="text" onChange={onTextChange} value={text}/>
            <button onClick={onDateRest}>데이터 리셋하기</button>
            <h3>값 : {text}</h3>
            <p>텍스트 박스에 사용자가 데이터를 입력하면 h3태그에 실시간으로 출력이 되게하고, 
                '리셋'버튼을 클릭하면 값을 초기화하기</p>
        </div>
    );
}

export default InputTest;