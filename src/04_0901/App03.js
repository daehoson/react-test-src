import React from "react";
import Main from "./Main";

const App03 = () =>{
    const names = [
        {name:"상품1", percentage:"30%", price:"29,000원"},
        {name:"상품2", percentage:"10%", price:"30,000원"},
        {name:"상품3", percentage:"20%", price:"23,000원"}
    ];
    //const nameList = names.map((v) => (<Main name={v[0]} percentage={v[1]} price={v[2]}/>))
    const nameList = names.map((v) => (<Main key={v.name} percentage={v.percentage} price={v.price}/>))
    return(
        <div>
            {nameList}
            <p>키값을 설정하는 목적 : 사용목적 : 요소의 리스트를 만들 때,
                React에서 컴포넌트를 렌더링 하였을 때 어떤 아이템이 변경되었는지 빠르게 감지하기
                위해 사용한다.(변경, 추가 , 삭제등)
            </p>
            <p>만약 key가 설정되지 않았다면 가상 DOM을 순차적으로 비교하면서
                감지하기 때문에 key가 없을때보다 속도가 느리다.
            </p>
            <p>
                map함수 인장로 전달되는 함수 내부에서 컴포넌트 props를 설정하는 것과 같이 작성한다.
            </p>
            <p>
                key는 요소의 고유한 값이어야 한다. 배열 요소의 고유한 값을 사용하거나 index로 사용한다.
            </p>
        </div>
    );
}

export default App03;