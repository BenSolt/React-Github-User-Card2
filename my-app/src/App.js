import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import ReactDOM from "react-dom";

class App extends React.Component {


  constructor(){
    super()
    this.state = {
      user1: {},
      followers:[]
    };
  }

  componentDidMount() {
axios
    .get('')
    .then(res => {
      this.setState({
        user1: res.data
      })
    })
    .catch(err => console.log(err));

  }

render() {
  return (
    <div className="App">
      <h1>Github-User Card</h1>  





    </div>
  );
 }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;