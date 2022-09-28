import React, { Component } from 'react';

class Map extends Component {
    render() {
        const numbers =[1,3,5]
        for(let i = 0; i<numbers.length; i++){
            //console.log(numbers[i]);
        }

        const numbers2 =[2,4,6];
        const listItems = numbers2.map((number, idx)=>{
            console.log(number);
            return number + 1;
        });
        console.log(listItems);
        return (
            <div>
                <h3>map함수란?</h3>
                <p>- 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()을 사용한다.</p>
                <p>- 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다.</p>
            
            </div>
        );
    }
}

export default Map;