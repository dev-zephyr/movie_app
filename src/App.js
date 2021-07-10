import React from "react";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {   // 처음 mount되었을때(유저의 첫 접속) render() 이후 이 함수 실행
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }

  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
