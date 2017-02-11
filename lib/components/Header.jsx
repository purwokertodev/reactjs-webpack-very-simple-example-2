'use strict';

import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

class Header extends Component {

  constructor(){
    super();
    this.state = {
      time: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      time: new Date()
    });
  }

  render(){
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Movie News</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Movie</NavItem>
            <NavItem eventKey={3} href="#">User</NavItem>
            <NavItem eventKey={4} href="#">About</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>{this.state.time.toLocaleTimeString()}</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
