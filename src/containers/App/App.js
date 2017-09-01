import React, { Component, PropTypes } from 'react';
import './App.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;

    return (<div>
      {children}
    </div>);
  }
}
