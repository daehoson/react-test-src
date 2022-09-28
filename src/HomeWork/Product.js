import React from 'react';
import {useParams} from 'react-router-dom';
//import {useLocation} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Product(props) {
    //const {productId} = useParams();
    const productId = useParams().productId;
    //const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('search');

    const navigate = useNavigate();
    return (
        <div className='product'>
            <h3>{productId}상품페이지</h3>
                {/* <li>hash(주소의 #문자열 뒤에 값) : {location.hash}</li>
                <li>pathname(현재 주소의 경로) : {location.pathname}</li>
                <li>search(?를 포함한 쿼리스트링) : {location.search}</li>
                <li>state(페이지로 이동시 임의로 넣을 수 있는 값) : {location.state}</li>
                <li>key(location 객체의 고유의 값, 초기값은 default, 페이지가 변경될때마다 고유의 값이 생성) : {location.key}</li> */}
                {/* <li>keywords : {keywords}</li> */}
                <div>keyword : {keyword}</div>
                <button onClick={()=>navigate(-1)}>이전 페이지로 이동하기</button>
                <button onClick={()=>navigate(1)}>다음 페이지로 이동하기</button>
                <button onClick={()=>navigate('/')}>첫 페이지로 이동하기(홈으로)</button>

        </div>
    );
}

export default Product;