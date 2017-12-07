import React, { Component } from 'react';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Dataset from '../Dataset/Dataset';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import ToggleDisplay from 'react-toggle-display';
require ('./degreeInfoSeries.css');

export default class DegreeInfoSeries extends React.Component {

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
          <button className={'btn hvr-fade ' + (this.state.showInDegree ? 'btnActive' : 'btn hvr-fade')} onClick={ () => this.handleClickIn() }>In degree</button>
          <button className={'btn hvr-fade ' + (this.state.showOutDegree ? 'btnActive' : 'btn hvr-fade')} onClick={ () => this.handleClickOut() }>Out degree</button>
        </div>
        <ToggleDisplay className="inDegree degree" show={this.state.showInDegree}>
        <ul>
          <li>Tyrion Lannister, 197</li>
          <li>John Snow, 174</li>
          <li>Daenerys Targaryen, 161</li>
          <li>Jaime Lannister, 149</li>
          <li>Robb Stark, 148</li>
          <li>Eddard Stark, 138</li>
          <li>Sansa Stark, 134</li>
          <li>Stannis Baratheon, 129</li>
          <li>Joffrey Baratheon, 127</li>
          <li>Cersei Lannister, 126</li>
        </ul>
        </ToggleDisplay>

        <ToggleDisplay className="outDegree degree" show={this.state.showOutDegree}>
        <ul>
          <li>Tyrion Lannister, 81</li>
          <li>John Snow, 79</li>
          <li>Arya Stark, 68</li>
          <li>Jaime Lannister, 67</li>
          <li>Sansa Stark, 65</li>
          <li>Daenerys Targaryen, 63</li>
          <li>Robb Stark, 63</li>
          <li>Cersei Lannister, 59</li>
          <li>Eddard Stark, 58</li>
          <li>Ramsay Bolton, 57</li>
        </ul>
        </ToggleDisplay>
      </div>
    );
  }
}
