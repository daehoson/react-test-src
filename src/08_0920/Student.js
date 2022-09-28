import React from 'react';

function Student({student, onRemove}) {
    return (
        <div>
            <h3>파일명 : {student.img}</h3>
            <img src={student.img} alt={student.item} />
            <h3>상품 : {student.item}</h3>
            <h3>가격 : {student.price}원</h3>
            <h3>설명 : {student.content}</h3>
            &nbsp;&nbsp;
            <button onClick={()=>onRemove(student.id)}>삭제</button>
            <hr />
        </div>
    );
}

export default Student;