import React from 'react';

// function Child3({name,age,hobby}) {
const Child3 = ({name,age,hobby}) =>{
    return (
        <div>
            <h3>이름 : {name}</h3>    
            <h3>나이 : {age}</h3>    
            <h3>취미 : {hobby}</h3>    
        </div>
    );
}

export default Child3;