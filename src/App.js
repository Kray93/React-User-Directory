import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid banner">
          <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">List of employees. Toggle sort A-Z and Z-A by clicking on column header.</p>
          </div>
        </div>
        <List />
      </div>
    );
  }
}

export default App;