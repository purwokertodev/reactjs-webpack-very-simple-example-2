import React, {Component} from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import {Panel} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      movies: [],
      totalMovies: 0
    }
  }

  componentWillMount(){
    this.fetchMovies();
    this.setState({
      title: 'List of movies'
    });
  }

  componentDidMount(){

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
    return (
      <div>
        <Header/>
        <Well>
          <input
            type='text'
            ref='query'
            placeholder='Enter the Movie title'
            onChange={(e) => {this.handleChange();}}
          />
        </Well>
        <Content panelTitle={this.state.title} movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
