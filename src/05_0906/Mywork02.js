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
                    <span className='afterPrice'>{afterPrice}???</span>
                    <p className='price'>{price}???</p>
                </li>
            </ul>
        </>
    );
}
// ???????????? ??????
const t_info = [
    {
        name: 'Uluwatu, ???????????????',
        image: './images/01???????????????.jpg',
        percent: 15, 
        price: 250000
    },
    {
        name: 'El Nido, ?????????',
        image: './images/02?????????.jpg',
        percent: 10, 
        price: 220000
    },
    {
        name: 'Th??nh ph??? Nha Trang, ?????????',
        image: './images/03?????????.jpg',
        percent: 10, 
        price: 1500000
    },
    {
        name: 'Mueang Chiang Mai District, ??????',
        image: './images/04??????.jpg',
        percent: 37, 
        price: 29000
    }
]
// ???????????? ??????
const t_cate=[
    {name : "?????????"},
    {name : "??????"},
    {name : "???????????????"},
    {name : "??????"},
    
]

function App() {
    return (
        <>
            <h2 className="title">Kurly</h2>
            <h2 className="title01">MD??? ??????</h2>
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