import React from 'react';
import dummy from './DB/data.json';
import {useParams} from 'react-router-dom';

function Day() {
    const {day} = useParams();
    const wordList = dummy.words.filter(word=>word.day===Number(day));
    return (
        <div>
            <h2>{day}일차 수업</h2>
            <table>
                <tbody>
                    {wordList.map(word=>(
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Day;