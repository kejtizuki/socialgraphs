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
          <li>Jaime Lannister, 168)</li>
          <li>Tyrion Lannister, 146</li>
          <li>Stannis Baratheon, 135</li>
          <li>Robb Stark, 123</li>
          <li>Tywin Lannister, 122</li>
          <li>Eddard Stark, 113)</li>
          <li>Cersei Lannister, 103</li>
          <li>on Snow, 100</li>
          <li>Eddard_Stark, 67</li>
          <li>Arya Stark, 87</li>
          <li>Walder Frey, 78</li>
        </ul>
        </ToggleDisplay>

        <ToggleDisplay className="outDegree degree" show={this.state.showOutDegree}>
        <ul>
          <li>Jaime Lannister, 83)</li>
          <li>Eddard Stark, 72</li>
          <li>Tyrion Lannister, 69</li>
          <li>Cersei Lannister, 69</li>
          <li>Barristan Selmy, 68</li>
          <li>Arya Stark, 67</li>
          <li>Jon Snow, 53</li>
          <li>Sandor Clegane, 50</li>
          <li>Theon Greyjoy, 50</li>
          <li>Tywin Lannister, 49</li>
        </ul>
        </ToggleDisplay>
      </div>
    );
  }
}
