import React, { Component } from 'react';

class Game extends Component {
    shoot = () => {
        //alert('게임에 당첨되셨습니다.');
        //명령 프롬프트 창을 띄워서 1등을 입력하면 '축 당첨 해외여행 상품권에 당첨되셨습니다.'
        //2등을 입력하면 '대형TV에 당첨되셨습니다.' 그 외 숫자는 '꽝'이라고 출력하시오. 

        let txt2 = prompt('등수 입력하세요~');
        if(txt2 == '1등'){
            alert("축 당첨 해외여행 상품권에 당첨되셨습니다.");
        }else if(txt2 == '2등'){
            alert("대형TV에 당첨되셨습니다.");
        }else{
            alert("꽝");
        }
    }
    render() {
        return (
            <>
                {/** 버튼을 사용하여 클릭시 위 함수 호출하기 */}
                <button onClick={this.shoot}>버튼을 클릭하시면 결과를 보실 수 있습니다.</button>
            </>
        );
    }
}

export default Game;