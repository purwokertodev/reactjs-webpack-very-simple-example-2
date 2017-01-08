import React, {Component} from 'react';

class Content extends Component {

  render(){
      return(
        <div>
          <h4>{this.props.title}</h4>
        </div>
      );
  }
}

export default Content;
