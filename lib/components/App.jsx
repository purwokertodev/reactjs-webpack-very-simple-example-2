import React, {Component} from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import TableRow from './TableRow.jsx';
import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

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
        <Panel header={this.state.title} bsStyle="primary">
          <Table striped bordered condensed hover>
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
          </Table>
        </Panel>
      </div>
    );
  }
}

export default App;
