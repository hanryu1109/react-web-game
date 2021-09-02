const React = require('react'); // npm 에서 react를 불러와야 한다 
const { Component } = React; // React.Component 라는 표현 대신에 바로 Component 로 쓸 수 있음

class WordRelay extends Component {
    state = {
        text: 'Hello, webpack!'
    }
    
    render() {
        return (<div>{this.state.text}</div>)
    }
}

module.exports = WordRelay;