import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import ReactDOM from "react-dom";
import UserCard from './UserCard';

class App extends React.Component {


  constructor(){
    super()
    this.state = {
      user1: {},
      followers1:[]
    };
  }

  componentDidMount() {
    console.log('first render, mounting')
axios
    .get('https://api.github.com/users/BenSolt')
    //  .then(res => console.log(res.data));
    .then (res => {this.setState({
     user1: res.data
      })
    })
    .catch(err => console.log(err));
axios
    .get('https://api.github.com/users/BenSolt/followers')
    .then (res => {this.setState({
     followers1: res.data
      })
    })

  }

render() {
  return (
    <div className="App">
      <h1>Github-User Card</h1>  
      <UserCard userC={this.state.user1}
                followersC={this.state.followers1}/>
    </div>
  );
 }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;