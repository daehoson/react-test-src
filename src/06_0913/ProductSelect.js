import React, { Component } from 'react';

class ProductSelect extends Component {
    state = {
        menu : '에그 샐러드'
    }
    nameChange = (e) =>{
        let v = e.target.value;
        this.setState({menu:v});
    }
    render() {
        //스타일 선언하기
        const style = {
            color:'#f00',
            background:'#ffff00'
        }
        return (
            <>
                <form>
                    <h2>상품을 선택해 주세요.</h2>
                    <select value={this.state.value} onChange={this.nameChange}>
                        <option value="에그 샐러드">에그 샐러드</option>
                        <option value="단호박 샐러드">단호박 샐러드</option>
                        <option value="치즈샐러드">치즈샐러드</option>
                        <option value="고구마 샐러드">고구마 샐러드</option>
                        <option value="치킨 샐러드">치킨 샐러드</option>
                        <option value="파스타 샐러드">파스타 샐러드</option>
                    </select>
                </form>
                <p>select항복에서 선택한 메뉴가 출력이 되도록 하시오.(글자 굵게, 배경색 노랑)</p>
                <span style={style}>{this.state.menu}</span>
            </>
        );
    }
}

export default ProductSelect;