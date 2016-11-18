import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Home.css';
import {PaneGroup, Pane, Toolbar, Content, Window} from 'react-photonkit';
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

export default class Home extends Component {
  render() {
    return (
      <Window>
        <Content>
          <PaneGroup>
            <Sidebar select = {this.props.filter}/>
            <Pane className="padded-more">
              Hello, react-photonkit!!!
            </Pane>
          </PaneGroup>
        </Content>
      </Window>
    );
  }
}

class BookList extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>

    )
  }
}
