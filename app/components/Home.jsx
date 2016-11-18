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
            <Sidebar select={this.props.filter}/>
            <Pane className="padded-more">
              Hello, react-photonkit!!!
            </Pane>
          </PaneGroup>
        </Content>
        <Header/>
      </Window>
    );
  }
}