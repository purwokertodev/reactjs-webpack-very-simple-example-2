import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

class Header extends Component {
  render(){
    return (
      <div>
        <Jumbotron>
          <h2>React Bootstrap Demo</h2>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
