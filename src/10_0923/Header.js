import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    return (
        <div className="header">
            <h1><Link to='/'>상단로고</Link></h1>
            <button onClick={()=>navigate(-1)}>뒤로가기</button>
        </div>
    );
}

export default Header;