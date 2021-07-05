import React from "react";
import PropTypes from "prop-types";

// 함수의 args로 props를 사용하면 "fav" : "kimchi"의 object 타입으로 사용가능.
// {fav}로 args를 사용하면 props의 {key}에 해당하는 value를 바로 사용할수있다. - ES6
// props의 하나의 key로 여러 value가 담겼다면 for루프 없이 자동으로 모든 value가 적용된다.

const foodILike = [
  {
    id:1,
    name : "kimchi",
    image : "http://www.fsnews.co.kr/news/photo/201912/35793_30048_3219.png",
    rating : 5
  },
  {
    id : 2,
    name : "kimbap",
    image : "https://www.tsunagulocal.com/wp-content/uploads/2021/02/pixta_65991015_M-800x533.jpg",
    rating : 4
  }
];

function Food({keyNo, name, picture, rating}) {    
  return (
    <div>
      <h1>key : {keyNo}</h1>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
  ); 
}

// 안전하게 데이터를 처리하기 위한 방어모드 propTypes
// type-safe 체크. (string, number, boolean, ...)
// isRequired -> 필수인지 아닌지 체크도 가능.
// 더 많은거 체크 가능. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {  
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id}   // key는 약속된 이름. unique를 판별할뿐 props로 rendering에 사용불가.
          keyNo={dish.id}
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        /> 
      ))}
    </div>
  )
}

export default App;
