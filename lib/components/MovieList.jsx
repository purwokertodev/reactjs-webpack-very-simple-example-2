'use strict';

import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

class MovieList extends Component {

  render(){
    return(
      <Well>
        <h3>{this.props.movie.Title}</h3>
        <p>Year: {this.props.movie.Year}</p>
        <Image src={this.props.movie.Poster} thumbnail/>
      </Well>
    );
  }
}

export default MovieList;
