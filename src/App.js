import React from "react";

// 함수의 args로 props를 사용하면 "fav" : "kimchi"의 object 타입으로 사용가능.
// {fav}로 args를 사용하면 props의 {key}에 해당하는 value를 바로 사용할수있다. - ES6
// props의 하나의 key로 여러 value가 담겼다면 for루프 없이 자동으로 모든 value가 적용된다.
function Food({name, picture}) {    
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>; 
}

const foodILike = [
  {
    name : "kimchi",
    image : "http://www.fsnews.co.kr/news/photo/201912/35793_30048_3219.png"
  },
  {
    name : "kimbap",
    image : "https://www.tsunagulocal.com/wp-content/uploads/2021/02/pixta_65991015_M-800x533.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} /> 
      ))}
    </div>
  )
}

export default App;
