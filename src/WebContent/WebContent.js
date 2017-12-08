import React, { Component } from 'react';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Dataset from '../Dataset/Dataset';
import Sentiment from '../Sentiment/Sentiment';
import Notebooks from '../Notebooks/Notebooks';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Link, Redirect} from 'react-router-dom'
require ('../App.css');

export default class WebContent extends React.Component {
  render() {
    return (
      <div className="webContent">
        <Menu customBurgerIcon={ <img src="icon.png" className="myMenu"/> } className="myMenu">
          <Link id="dataset" className="menu-item" to="/about">About</Link>
          <Link id="network" className="menu-item" to="/network">Networks</Link>
          <Link id="sentiment" className="menu-item" to="/sentiment">Sentiment analysis</Link>
          <Link id="notebooks" className="menu-item" to="/notebooks">Notebooks</Link>
        </Menu>
        <Header />
        <Switch>
        <Route exact path="/" render={() => (
            <Redirect to="/network"/>
          )
        }/>
        <Route exact path='/about' component={Dataset}/>
        <Route path='/network' component={Network}/>
        <Route path='/sentiment' component={Sentiment}/>
        <Route path='/notebooks' component={Notebooks}/>
        </Switch>
      </div>
    );
  }
}
