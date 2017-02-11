'use strict';

import React, {Component} from 'react';
import Home from './Home.jsx';
import Content from './Content.jsx';
import MovieList from './MovieList.jsx';
import UserList from './UserList.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

class App extends Component {

  render(){
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Content}>
          <IndexRoute component={Home}/>
          <Route path={'home'} component={Home}/>
          <Route path={'movies'} component={MovieList}/>
          <Route path={'users'} component={UserList}/>
        </Route>
      </Router>
    );
  }
}

export default App;
