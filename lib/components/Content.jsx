import React, {Component} from 'react';
import TableRow from './TableRow.jsx';
import {Panel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

class Content extends Component {

  render(){
      return(
        <div>
          <Panel header={this.props.panelTitle} bsStyle="primary">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userItems.map((user, i) =>
                  <TableRow key={i} data={user}/>
                )}
              </tbody>
            </Table>
          </Panel>
        </div>
      );
  }
}

export default Content;
