'use strict';

import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

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
        <Jumbotron>
          <h2>React Bootstrap Demo</h2>
          <h4>{this.state.time.toLocaleTimeString()}</h4>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
