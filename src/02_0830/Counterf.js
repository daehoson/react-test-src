import React, { useState } from 'react';

function Counterf(props) {
    const [num,setNum] = useState(0);
    const onPlus = () => {
        setNum(num+1);
    }
    const onMinus = () =>{
        setNum(num-1);
    }
    return (
        <>
            <h2>{num}</h2>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </>
    );
}

export default Counterf;