import React, {Component} from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import TableRow from './TableRow.jsx';
//import request from 'request';

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
        <Content title = {this.state.title}/>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userItems.map((user, i) =>
              <TableRow key={i} data={user}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
