import React, {Component} from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import {Panel} from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      userItems: []
    }
  }

  componentWillMount(){
    this.setState({
      title: 'Fake User Data'
    });
  }

  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(datas => this.setState({
      userItems: datas
    }))
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <Content panelTitle={this.state.title} userItems={this.state.userItems}/>
      </div>
    );
  }
}

export default App;
