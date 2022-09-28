import React from 'react';
import {Link} from 'react-router-dom';

function Category({name}){
    return(
        <>
            <div>
                <a href="#" title={name}>
                    <div className='category'>{name}</div>
                </a>
            </div>
        </>
    )
}

function Product({name, picture, price, percent, afterPrice}){
    //console.log(props);
    return(
        <>
            <div className="market_item">
                <div className='itemPic'>
                    <a href="#" title={name}> 
                            <div className="item_img">
                                <img src={picture} alt={name} />
                            </div>
                    </a>
                </div>
                <div to='/product/1' className='itemDesc'>
                    <Link to={`/product/${name}`}>여행지 : {name}</Link>
                    <div className='percent'>할인율 : {percent}% </div>
                    <div className='afterPrice'>할인된 가격 : {afterPrice}원</div>
                    <div className='price'>기존 가격 : {price}원</div>
                </div>
            </div>
        </>
    );
}
// 여행정보 배열
const t_info = [
    {
        id : 1,
        name: 'Uluwatu, 인도네시아',
        image: './images/01인도네시아.jpg',
        percent: 15, 
        price: 250000
    },
    {
        id : 2,
        name: 'El Nido, 필리핀',
        image: './images/02필리핀.jpg',
        percent: 10, 
        price: 220000
    },
    {
        id : 3,
        name: 'Thành phố Nha Trang, 베트남',
        image: './images/03베트남.jpg',
        percent: 10, 
        price: 1500000
    },
    {
        id : 4,
        name: 'Mueang Chiang Mai District, 태국',
        image: './images/04태국.jpg',
        percent: 37, 
        price: 29000
    }
]
// 카테고리 배열
const t_cate=[
    {name : "렌트카"},
    {name : "숙박"},
    {name : "레저이용권"},
    {name : "식사"},
]
function Main(props) {
    return (
        <div className='main'>
            <div className="MD_title">MD의 추천</div>
            <div className='categoryList'>
                {t_cate.map(cate =>(
                    <Category name={cate.name} />
                ))}
            </div>
            <div className='itemsList'>
                {t_info.map(dish =>(
                    <Product name={dish.name} 
                            picture={dish.image} 
                            percent={dish.percent}
                            afterPrice={(dish.price-(dish.price*dish.percent/100)).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                            price={dish.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}/>
                    ))}
            </div>
        </div>
        
    );
}

export default Main;