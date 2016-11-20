import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Home.css';
import {Window, View, TitleBar, Text} from 'react-desktop/macOs';
import Sidebar from './Sidebar';
import VisibleBookList from '../containers/VisibleBookList'

export default class Home extends Component {
  render() {
    return (
      <VisibleBookList />
    );
  }
}