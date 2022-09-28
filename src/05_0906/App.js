import React from 'react';
import './App.css';

function Product({name, picture, price}){
    //console.log(props);
    return(
        <>
            <ul className="best_item">
                <li>
                    <a href="#" title={name}> 
                        <img src={picture} alt={name} />
                    </a>
                    <p>{name}</p>
                    <p>{price}</p>
                </li>
            </ul>
        </>
    );
}
// 여행정보 배열
const t_info = [
    {
        name: 'Uluwatu, 인도네시아',
        image: './images/01인도네시아.jpg',
        price: '₩251,691'
    },
    {
        name: 'El Nido, 필리핀',
        image: './images/02필리핀.jpg',
        price: '₩223,071'
    },
    {
        name: 'Thành phố Nha Trang, 베트남',
        image: './images/03베트남.jpg',
        price: '₩1,585,117'
    },
    {
        name: 'Mueang Chiang Mai District, 태국',
        image: './images/04태국.jpg',
        price: '₩29,032'
    }
]

function App() {
    return (
        <>
            <h2 className="title01">기상천외한 숙소</h2>
            {t_info.map(dish =>(
                <Product name={dish.name} picture={dish.image} price={dish.price}/>
            ))}
        </>
    );
}

export default App;