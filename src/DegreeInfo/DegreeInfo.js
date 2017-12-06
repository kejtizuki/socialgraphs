import React, { Component } from 'react';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Dataset from '../Dataset/Dataset';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import ToggleDisplay from 'react-toggle-display';
require ('./degreeInfo.scss');

export default class DegreeInfo extends React.Component {

  constructor() {
    super();
    this.state = { showInDegree: false, showOutDegree: false };
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
          <button className={'btn hvr-fade' + (this.state.showInDegree ? 'btnActive' : 'btn hvr-fade')} onClick={ () => this.handleClickIn() }>In degree</button>
          <button className={'btn hvr-fade' + (this.state.showOutDegree ? 'btnActive' : 'btn hvr-fade')} onClick={ () => this.handleClickOut() }>Out degree</button>
        </div>
        <ToggleDisplay className="inDegree degree" show={this.state.showInDegree}>
        <ul>
          <li>Jon_Snow, 134</li>
          <li>Daenerys_Targaryen, 134</li>
          <li>Robb_Stark, 81</li>
          <li>Tyrion_Lannister, 77</li>
          <li>Sansa_Stark, 70</li>
          <li>Catelyn_Stark, 68</li>
          <li>Jaime_Lannister, 68</li>
          <li>Eddard_Stark, 67</li>
          <li>Arya_Stark, 64</li>
          <li>Cersei_Lannister, 63</li>
        </ul>
        </ToggleDisplay>

        <ToggleDisplay className="outDegree degree" show={this.state.showOutDegree}>
        <ul>
          <li>Robb_Stark, 64</li>
          <li>Sansa_Stark, 61</li>
          <li>Catelyn_Stark, 61</li>
          <li>Arya_Stark, 58</li>
          <li>Jaime_Lannister, 55</li>
          <li>Tyrion_Lannister, 54</li>
          <li>Jon_Snow, 53</li>
          <li>Eddard_Stark, 53</li>
          <li>Bran_Stark, 51</li>
          <li>Brienne_of_Tarth, 48</li>
        </ul>
        </ToggleDisplay>
      </div>
    );
  }
}
