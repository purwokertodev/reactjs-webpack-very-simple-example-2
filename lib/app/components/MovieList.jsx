'use strict';

import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class MovieList extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      totalMovies: 0
    }
  }

  componentWillMount(){
    this.fetchMovies();
  }

  handleChange(){
    let q = this.refs.query.value;
    this.fetchMovies(q);
  }

  fetchMovies(q = 'twilight'){
    fetch(`http://www.omdbapi.com/?s=${q}&r=json`, {method: 'GET', mode: 'cors'})
    .then(res => res.json())
    .then(data => this.setState({
        movies: data.Search,
        totalMovies: data.totalResults
      })
    )
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    let movies = this.state.movies.map((movie, i) => {
        return (
          <Well key={i}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <Image src={movie.Poster} thumbnail/>
          </Well>
        );
      });
    return (
      <div>
        <Well>
          <input
            type='text'
            ref='query'
            placeholder='Enter the Movie title'
            onChange={(e) => {this.handleChange();}}
          />
        </Well>
        {movies}
      </div>
    );
  }

}

export default MovieList;
