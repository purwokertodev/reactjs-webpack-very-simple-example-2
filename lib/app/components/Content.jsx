'use strict';

import React, {Component} from 'react';
import Header from './Header.jsx';
import MovieList from './MovieList.jsx';
import {Panel} from 'react-bootstrap';

class Content extends Component {

  render(){
      return(
        <div>
          <Header/>
          <Panel header="React JS" bsStyle="primary">
            {this.props.children}
          </Panel>
        </div>
      );
  }
}

export default Content;
