import React, {useState} from 'react'; //Hooks가 useState()함수를 사용할 수 있게.

function Counter(props) {
    // num : 지정할 숫자 - 변수에 담기
    // setNum : 변화될 숫자 - 변수에 담기
    // const[값변수, 값변경함수] = useState(기본값); (공식)
    const [num, setNum]=useState(1); // 기본값을 0으로 처리한다.
    //1씩 증가하는 함수
    const onIncrease=()=>{
        setNum(num+1); //1씩 증가
    }
    //1씩 감소하는 함수
    const onDecrease=()=>{
        if(num > 1){
            setNum(num-1); //1씩 감소
        }
    }
    // 스타일 선언
    const Color01={
        color:'#ff0000',
        padding:'10px',
        border:'2px solid #00f'
    }
    return (
        <div style={Color01}>
            <h2>숫자 증가/감소 : {num}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease} disabled={num <= 1}>-</button>
        </div>
    );
}

export default Counter;