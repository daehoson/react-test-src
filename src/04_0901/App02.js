import React, { Component } from 'react';
import Father from './Father';
import Child from './Child';

class App02 extends Component {
    render() {
        return (
            <Father>
                <Child></Child>
            </Father>
            //-<Father /> 데이터를 불러오고 그안에 <Child />를 불러옴
        );
    }
}

export default App02;