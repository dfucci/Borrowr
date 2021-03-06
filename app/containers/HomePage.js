import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';

function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators(bookActions, dispatch);
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
