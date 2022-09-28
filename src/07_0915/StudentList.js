import React from 'react';
import Student from './Student';

function StudentList(props) {
    const students = [{
        id:'s001',
        name:'홍길동',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s002',
        name:'홍길동2',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s003',
        name:'홍길동3',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s004',
        name:'홍길동4',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s005',
        name:'홍길동5',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s006',
        name:'홍길동6',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s007',
        name:'홍길동7',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s008',
        name:'홍길동8',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s009',
        name:'홍길동9',
        age:28,
        email:'abcd@naver.com',
    },{
        id:'s010',
        name:'홍길동10',
        age:28,
        email:'abcd@naver.com',
    }]

    return (
        <>
            <h2>배열 데이터 관리하기</h2>
            <p>var array = ['일','월','화','수','목','금','토'];</p>
            <p>출력방법 : array or array[0], array[2]</p>
            <ul>
                <li>이름 : {students[0].name}</li>
                <li>나이 : {students[0].age}세</li>
                <li>이메일 : {students[0].email}</li>
            </ul>
            {/* 맵으로 출력 */}
            <div> 
                {students.map((student)=>(
                    <ul>
                        <li>이름 : {student.name}</li>
                        <li>나이 : {student.age}세</li>
                        <li>이메일 : {student.email}</li>
                    </ul>
                ))}
            </div>
            {/* 자손으로 출력 */}
            {/* <Student student={students[0]} />
            <Student student={students[1]} />
            <Student student={students[2]} />
            <Student student={students[3]} />
            <Student student={students[4]} />
            <Student student={students[5]} />
            <Student student={students[6]} />
            <Student student={students[7]} />
            <Student student={students[8]} />
            <Student student={students[9]} /> */}
            <hr />
            {students.map((student, index)=>(
                //<Student student={student} key={student.id} />
                <Student student={student} key={index} />
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