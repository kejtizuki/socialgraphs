import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import Network from './Network/Network';
import Dataset from './Dataset/Dataset';
import WebContent from './WebContent/WebContent';
import { slide as Menu } from 'react-burger-menu';
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super();
    this.state = {
      dataset: false
    }
    this.showDataset = this.showDataset.bind(this);
  }

  showDataset(event) {
    event.preventDefault();
    console.log(this.state)
    this.setState({ dataset: true });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <WebContent />
        </div>
      </HashRouter>

    );
  }
}

export default App;
