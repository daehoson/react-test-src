import React , { useRef, useState } from 'react';
import Product from './Product';
import InsertProduct from './InsertProduct';

function ProductList() {
    const [products,setProducts] = useState([{
        id:'s001',
        img:"123.jpg",
        item:'빵',
        price:'20.000',
        content:'피카츄',
    }])
    //입력상자에서 사용할 값을 state로 관리하기
    const [inputs, setInputs] = useState({
        img:"",
        item:"",
        price:"",
        content:"",
    });
    //비구조화할당 - state값을 각각 변수에 담기
    const {img,item,price,content}=inputs;

    const nextId = useRef(11);
    const onCreate = () =>{
        //배열 뒤에 추가내용
        const product ={
            id:'s010'+nextId.current,
            img:'./images/'+img,
            item,
            price,
            content
        };
        setProducts([...products, product]) //기존 배열 students에 변수 student값을 추가하기
        nextId.current += 1; //id값이 1씩 증가되게
    };
    //데이터 변경함수
    const onDataChange = (e) =>{
        const {name, value} = e.target; //name, value는 값이 변경되는 input태그의 속성을 비구조화 할당으로 저장
        //state값 변경
        setInputs({
            ...inputs, //변경되는 것 외에 나머지 속성값을 의미하는 패턴임.
            [name]:value // 내부에서 밖의 변수를 속성명으로 사용.
        });
    };

    //데이터 삭제함수
    const onRemove = id =>{
        setProducts(products.filter(product => product.id !== id));

        //id 값과 같지 않은 것들만 새로운 배열로 처리해서 state값을 변경합니다.
    };

    return (
        <>
            <InsertProduct 
                img={img}
                item={item}
                price={price}
                content={content}
                onDataChange={onDataChange}
                onCreate={onCreate}/>
                
            {products.map((product, index)=>(
                <Product product={product} key={product.id} onRemove={onRemove} />
            ))}

        </>
    );
}

export default ProductList;