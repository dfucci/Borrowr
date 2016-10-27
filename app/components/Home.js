import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <BookList />
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}

class BookList extends Component {
  render(){
    return(
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
