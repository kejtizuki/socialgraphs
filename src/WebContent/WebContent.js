import React, { Component } from 'react';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Dataset from '../Dataset/Dataset';
import Sentiment from '../Sentiment/Sentiment';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Link } from 'react-router-dom'
require ('../App.css');

export default class WebContent extends React.Component {
  render() {
    return (
      <div className="webContent">
        <Menu customBurgerIcon={ <img src="icon.png" className="myMenu"/> } className="myMenu">
          <Link id="dataset" className="menu-item" to="/about">About</Link>
          <Link id="network" className="menu-item" to="/network">Networks</Link>
          <Link id="sentiment" className="menu-item" to="/sentiment">Sentiment analysis</Link>
        </Menu>
        <Header />
        <Switch>
        <Route exact path='/about' component={Dataset}/>
        <Route path='/network' component={Network}/>
        <Route path='/sentiment' component={Sentiment}/>
        </Switch>
      </div>
    );
  }
}
