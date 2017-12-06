import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import Network from './Network/Network';
import Dataset from './Dataset/Dataset';
import WebContent from './WebContent/WebContent';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <div className="App">
          <WebContent />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
