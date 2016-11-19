import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Home.css';
import {Window, View, TitleBar, Text} from 'react-desktop/macOs';
import Sidebar from './Sidebar';
export default class Home extends Component {
  render() {
    return (
      <div className={styles.mainView}>
        <View 
          className="sidebar"
          background="lightgrey"
          padding="0px"
          horizontalAlignment="center"
          verticalAlignment="center"
          width="250px"
          margin="0px"
          height="800px">
          <Sidebar />
        </View>
        <View
          className="centralbar"
          background="white"
          padding="0px"
          horizontalAlignment="center"
          verticalAlignment="center"
          width="786px"
          margin="0px"
          height="800px">
          <Text color="grey">Central view</Text>
        </View>
      </div>
    );
  }
}