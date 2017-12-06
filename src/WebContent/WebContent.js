import React, { Component } from 'react';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Dataset from '../Dataset/Dataset';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
require ('../App.scss');

export default class WebContent extends React.Component {
  render() {
    return (
      <div className="webContent">
        <Menu customBurgerIcon={ <img src="icon.png" className="myMenu"/> } className="myMenu">
          <a id="dataset" className="menu-item" href="/dataset">Dataset</a>
          <a id="network" className="menu-item" href="/network">Network</a>
          <a id="sentiment" className="menu-item" href="/sentiment">Sentiment analysis</a>
        </Menu>
        <Header />
        <Switch>
        <Route exact path='/dataset' component={Dataset}/>
        <Route path='/network' component={Network}/>
        </Switch>
      </div>
    );
  }
}
