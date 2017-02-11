'use strict';

import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

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
            <NavItem eventKey={1}><Link to={'/home'}>Home</Link></NavItem>
            <NavItem eventKey={2}><Link to={'/movies'}>Movie</Link></NavItem>
            <NavItem eventKey={3}><Link to={'/users'}>User</Link></NavItem>
            <NavItem eventKey={4}><Link to={'/about'}>About</Link></NavItem>
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
