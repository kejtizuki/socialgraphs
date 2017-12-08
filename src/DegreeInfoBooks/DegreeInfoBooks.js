import React, { Component } from 'react';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Dataset from '../Dataset/Dataset';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import ToggleDisplay from 'react-toggle-display';
require ('./degreeInfoBooks.css');

export default class DegreeInfoBooks extends React.Component {

  constructor() {
    super();
    this.state = { showInDegree: true, showOutDegree: false };
  }

  handleClickIn() {
    this.setState({
      showInDegree: !this.state.showInDegree,
      showOutDegree: false
    });
  }
  handleClickOut() {
    this.setState({
      showInDegree: false,
      showOutDegree: !this.state.showOutDegree
    });
  }


  render() {
    return (
      <div className="degreeInfo">
        <h3 className="text-center" id="degreesHeader">See top 10 characters with the highest in or out degrees.</h3>
        <span className="additionalInfo">(After clicking on one of the buttons the network visualized on the graph above will change)</span>
        <div>
          <button className={'btnBooks hvr-fadeBooks ' + (this.state.showInDegree ? 'btnActiveBooks' : 'btnBooks hvr-fadeBooks')} onClick={ () => this.handleClickIn() }>In degree</button>
          <button className={'btnBooks hvr-fadeBooks ' + (this.state.showOutDegree ? 'btnActiveBooks' : 'btnBooks hvr-fadeBooks')} onClick={ () => this.handleClickOut() }>Out degree</button>
        </div>
        <ToggleDisplay className="inDegree degree" show={this.state.showInDegree}>
        <ul>
          <li>Tyrion Lannister, 286</li>
          <li>Jamie Lannister, 272</li>
          <li>Stannis Baratheon, 264</li>
          <li>John Snow, 220</li>
          <li>Arya Stark, 211</li>
          <li>Tywin Lannister, 209</li>
          <li>Daennerys Targaryen, 208</li>
          <li>Cersei Lannister, 204</li>
          <li>Robb Stark, 107</li>
          <li>Joeffrey Baratheon, 173</li>
        </ul>
        </ToggleDisplay>

        <ToggleDisplay className="outDegree degree" show={this.state.showOutDegree}>
        <ul>
          <li>Jaime Lannister, 99</li>
          <li>Barristan Selmy, 87</li>
          <li>Cersei Lannister, 86</li>
          <li>Tyrion Lannister, 84</li>
          <li>Arya Stark, 83</li>
          <li>Stannis Baratheon, 72</li>
          <li>Robert I Baratheon, 71</li>
          <li>Daennerys Targaryen, 70</li>
          <li>Aegon III Targaryen, 68</li>
          <li>Theon Greyjoy, 64</li>
        </ul>
        </ToggleDisplay>
      </div>
    );
  }
}
