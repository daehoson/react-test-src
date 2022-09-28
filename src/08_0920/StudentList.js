import React , { useRef, useState } from 'react';
import Student from './Student';
import CreateStudent from './CreateStudent';

function StudentList() {
    const [students,setStudents] = useState([{
        id:'s001',
        img:"123.jpg",
        item:'빵',
        price:'20.000',
        content:'피카츄',
    }])
    //입력상자에서 사용할 값을 state로 관리하기
    const [inputs, setInputs] = useState({
        img:"",
        item:"",
        price:"",
        content:"",
    });
    //비구조화할당 - state값을 각각 변수에 담기
    const {img,item,price,content}=inputs;

    const nextId = useRef(11);
    const onCreate = () =>{
        //배열 뒤에 추가내용
        const student ={
            id:'s010'+nextId.current,
            img,
            item,
            price,
            content
        };
        setStudents([...students, student]) //기존 배열 students에 변수 student값을 추가하기
        nextId.current += 1; //id값이 1씩 증가되게
    };
    //데이터 변경함수
    const onDataChange = (e) =>{
        const {name, value} = e.target; //name, value는 값이 변경되는 input태그의 속성을 비구조화 할당으로 저장
        //state값 변경
        setInputs({
            ...inputs, //변경되는 것 외에 나머지 속성값을 의미하는 패턴임.
            [name]:value // 내부에서 밖의 변수를 속성명으로 사용.
        });
    };

    //데이터 삭제함수
    const onRemove = id =>{
        //student.id가 매개변수로 작성하지 않은 데이터들만 추출해서 새로운 배열 만듬.
        //=student.id가 id인것을 제거
        setStudents(students.filter(student => student.id !== id));

        //id 값과 같지 않은 것들만 새로운 배열로 처리해서 state값을 변경합니다.
    };

    return (
        <>
            <CreateStudent 
                img={img}
                item={item}
                price={price}
                content={content}
                onDataChange={onDataChange}
                onCreate={onCreate}/>
                
            {students.map((student, index)=>(
                <Student student={student} key={student.id} onRemove={onRemove} />
            ))}

            <hr />
            <p> 첫번째 - 0번째부터 10번까지 배열데이터값 출력을 하면 매번 같은 태그를 사용해야해서
                비효율적이다.
            </p>
            <p>
                두번째 - 부모컴포넌트를 만들어서 배열 데이터 출력하기
            </p>
            <p>
                세번째 - map()함수를 사용하여 배열데이터값 출력하기
            </p>
            <p>
                map()메서드는 Array객체의 메서드로 모든 배열 요소에 대해 함수를 
                호출한 결과로 새 배열을 만드는 메서드 입니다.
            </p>
            <p>map함수 사용시 고유한 'key'값을 설정해야 에러가 나지 않음.</p>
            <p>배열의 값 중 고유한 값이 없으면 map()함수에 index매개변수처리</p>
        </>
    );
}

export default StudentList;