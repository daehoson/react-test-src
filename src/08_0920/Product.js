import React from 'react';

function Product({product, onRemove}) {
    const imgStyle = {
        width:'100px',
        heitgh:'100px',
    }
    return (
        <div>
            <h3>파일명 : {product.img}</h3>
            <img style={imgStyle} src={product.img} alt={product.item} />
            <h3>상품 : {product.item}</h3>
            <h3>가격 : {product.price}원</h3>
            <h3>설명 : {product.content}</h3>
            &nbsp;&nbsp;
            <button onClick={()=>onRemove(product.id)}>삭제</button>
            <hr />
        </div>
    );
}

export default Product;