import React from 'react';
import './App.css';

function Category({name}){
    return(
        <>
            <div>
                <a href="#" title={name}>
                    <div>{name}</div>
                </a>
            </div>
        </>
    )
}

function Product({name, picture, price, percent, afterPrice}){
    //console.log(props);
    return(
        <>
            <ul className="market_item">
                <li>
                    <a href="#" title={name}> 
                            <div className="item_img">
                                <img src={picture} alt={name} />
                                <div>
                                    <button type="button" className='product-function'>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3
                                        aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6
                                        Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0i
                                        ZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIg
                                        Y3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0
                                        cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJz
                                        cXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJv
                                        a2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkx
                                        eiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUi
                                        IGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRo
                                        PSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0
                                        aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAg
                                        IDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                                    </button>
                                </div>
                            </div>
                    </a>
                    <p>{name}</p>
                    <span className='percent'>{percent}% </span>
                    <span className='afterPrice'>{afterPrice}원</span>
                    <p className='price'>{price}원</p>
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
        percent: 15, 
        price: 250000
    },
    {
        name: 'El Nido, 필리핀',
        image: './images/02필리핀.jpg',
        percent: 10, 
        price: 220000
    },
    {
        name: 'Thành phố Nha Trang, 베트남',
        image: './images/03베트남.jpg',
        percent: 10, 
        price: 1500000
    },
    {
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

function App() {
    return (
        <>
            <h2 className="title">Kurly</h2>
            <h2 className="title01">MD의 추천</h2>
            {t_cate.map(cate =>(
                <Category name={cate.name} />
            ))}
            <br></br>
            {t_info.map(dish =>(
                <Product name={dish.name} 
                         picture={dish.image} 
                         percent={dish.percent}
                         afterPrice={(dish.price-(dish.price*dish.percent/100)).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                         price={dish.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}/>
            ))}
        </>
    );
}

export default App;