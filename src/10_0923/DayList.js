import React from 'react';
import { Link } from 'react-router-dom';
import dummy from './DB/data.json';

function DayList(props) {
    console.log(dummy)
    return (
        <div> 
            <h3>카테고리 출력하기</h3>
            <ul className='list_day'
            style={{
                    margin: "5px",
                    padding: "5px",
                    display: "grid",
                    gridTemplateRows: "1fr ",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                }}
            >
                {dummy.days.map((day)=>(
                    <li key={day.id} 
                        style={{ 
                            margin: "5px", 
                            backgroundColor: "white", 
                            height: "50px" 
                        }}
                    >
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DayList;