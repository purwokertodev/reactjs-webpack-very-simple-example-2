'use strict';

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Request from 'superagent';

class UserList extends Component {

  constructor(){
    super();
    this.state = {
      userDatas: []
    }
  }

  componentWillMount(){
    this.fetchUser();
  }

  fetchUser(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    Request.get(url)
    .then(response => {
      this.setState({
        userDatas: response.body
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render(){
    let users = this.state.userDatas.map((data, i) => {
      return (
        <tr key={i}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
      );
    });
    return(
      <Table striped bordered hover condensed>
        <thead>
          <tr><th>ID</th><th>NAME</th><th>EMAIL</th></tr>
        </thead>
        <tbody>{users}</tbody>
      </Table>
    );
  }
}

export default UserList;
