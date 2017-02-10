import React, {Component} from 'react';
import MovieList from './MovieList.jsx';
import {Panel} from 'react-bootstrap';

class Content extends Component {

  render(){
    var movies = this.props.movies.map((movie, i) => {
        return <MovieList key={i} movie={movie}/>
      });

      return(
        <div>
          <Panel header={this.props.panelTitle} bsStyle="primary">
            {movies}
          </Panel>
        </div>
      );
  }
}

export default Content;
