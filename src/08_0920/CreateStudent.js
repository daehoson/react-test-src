import React from 'react';

function CreateStudent({img, item, price, content, onDataChange, onCreate}) {
    const style ={
        width:'800px',
        margin:'20px',
        padding:'10px',
        border:'3px solid #00f'
    }
    
    return (
        <div style={style}>
            <h2>상단 입력양식</h2>
            <input type="text" 
                    name="img" 
                    placeholder='이미지를 입력하세요' 
                    onChange={onDataChange} 
                    value={img}/>
                    &nbsp;&nbsp;
            <input type="text" 
                    name="item" 
                    placeholder='이미지를 입력하세요' 
                    onChange={onDataChange} 
                    value={item}/>
                    &nbsp;&nbsp;
            <input type="text"
                    name="price"
                    placeholder='가격을 입력하세요.'
                    onChange={onDataChange}
                    value={price}/>
                    &nbsp;&nbsp;
            <input type="text"
                    name="content"
                    placeholder='설명을 입력하세요.'
                    onChange={onDataChange}
                    value={content}/>
                    &nbsp;&nbsp;
            <button onClick={onCreate}>내용추가</button>
            {/* 
                1. name은 데이터 추가될 이름 속성값
                2. age는 데이터 추가될 나이 속성값
                3. email은 데이터 추가될 이메일 속성값
                4. onDataChange 는 입력 양식에 데이터가 변경될 때 onChange이벤트를 적용할 함수
                5. onCreate는 내용추가 버튼을 클릭하면 onClick이벤트가 적용될 함수
            */}
        </div>
    );
}

export default CreateStudent;