import React, {useState} from "react";
import PropTypes from "prop-types";

// 함수의 args로 props를 사용하면 "fav" : "kimchi"의 object 타입으로 사용가능.
// {fav}로 args를 사용하면 props의 {key}에 해당하는 value를 바로 사용할수있다. - ES6
// props의 하나의 key로 여러 value가 담겼다면 for루프 없이 자동으로 모든 value가 적용된다.


// 안전하게 데이터를 처리하기 위한 방어모드 propTypes
// type-safe 체크. (string, number, boolean, ...)
// isRequired -> 필수인지 아닌지 체크도 가능.
// 더 많은거 체크 가능. https://ko.reactjs.org/docs/typechecking-with-proptypes.html

class App02 extends React.Component {

    state = {
        count : 0
    };

    add = () => {
        console.log("add");
        this.setState(current => ({count: current.count + 1}))       // setState() => 1. state를 새로 변경 2. 변경된 state로 render()를 재호출(refresh)
    };
    minus = () => {
        console.log("minus");
        this.setState(state => ({count: state.count - 1}))
    };

    componentDidMount() {   // 처음 mount되었을때(유저의 첫 접속) render() 이후 이 함수 실행
        console.log("componentDidMount()");
    }

    componentDidUpdate() {  // state나 props가 변경되었을때 render() 이후 이 함수 실행
        console.log("component did update()")
    }

    componentWillUnmount() {    // 다른 페이지로 넘아갈때 이 함수 실행
        console.log("componentWillUnmount()");
    }

    render() {
        console.log("render()")
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }

}

export default App02;
