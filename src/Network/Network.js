import React from "react";
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import data from './newData.json';
import DegreeInfo from '../DegreeInfo/DegreeInfo';
require ('./network.scss');


export default class Network extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // toggle box is closed initially
      showGraph: false,
    };
    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.toggleGraph = this.toggleGraph.bind(this);
    this.hideGraph = this.hideGraph.bind(this);
  }

  toggleGraph() {
    console.log("tooglelelg")
    // check if box is currently opened
    this.setState({
      // toggle value of `opened`
      showGraph: true
    });
  }

  hideGraph() {
    // check if box is currently opened
    this.setState({
      // toggle value of `opened`
      showGraph: false
    });
  }

  render() {
    function assignClassName(n) {
      console.log('FUNC')
      if (n.group === 0) {
        console.log(n);
        return 'node group0'
      }
      if (n.group === 1) {
        return 'node group1'
      }
      if (n.group === 2) {
        return 'node group2'
      }
      if (n.group === 3) {
        return 'node group3'
      }
      if (n.group === 4) {
        return 'node group4'
      }
    }

    const nodes = data.nodes;
    const links = data.links;
    return (
      <div className="container">
      <p className="text-center info">To get preliminary insights about the characters we created the graph representing the network.
      The characters are represented as nodes. We made a basic analysis and got the following statistics about the network:
      </p>
      <div className="row rowNetwork">
        <div className="text-center">
        <h3>Network of characters from series</h3>
        {this.state.showGraph ? <button className="btnLong" onClick={this.hideGraph}>Hide the graph</button> : <button className="btnLong hvr-fade" onClick={this.toggleGraph}>To see the graph click here!</button>}
        <div className="displayGrpah">
          { this.state.showGraph ?   <InteractiveForceGraph
              simulationOptions={{ height: 1400, width: 1200 }}
              labelAttr="label"
              onSelectNode={(node) => console.log(node)}
              strength={{charge: -50}}
              animate={false}
            >
            { nodes.map(function(n, key){
              return <ForceGraphNode node={{id: n.id, label: n.id}} className={assignClassName(n)} />;
            })}
            { links.map(function(l, key){
              return <ForceGraphLink link={{ source: l.source, target: l.target}} className="link"/>;
            })}
            </InteractiveForceGraph> : null }

        </div>
        </div>
        <div className="col-md-12">
          <div className="networkInfo">
            <div class="oneInformation">
              <div className="elipse">1111</div>
              <div class="labelInfo">NODES</div>
            </div>
            <div class="oneInformation">
              <div className="elipse">3815</div>
              <div class="labelInfo">EDGES</div>
            </div>
            <div class="oneInformation">
              <div className="elipse">56.5</div>
              <div class="labelInfo">AVG DEGREE</div>
            </div>
            <div class="oneInformation">
              <div className="elipse">49.0</div>
              <div class="labelInfo">MEDIAN DEGREE</div>
            </div>
          </div>
        </div>
      </div>
      <DegreeInfo />
      <div className="basicAnalysis">
        <div className="threeCols">
          <img src="inDegree.png" />
          <span className="labelInfo">In degree</span>
        </div>
        <div className="threeCols">
          <img src="outDegree.png" />
          <span className="labelInfo">Out degree</span>
        </div>
        <div className="threeCols">
          <img src="scatterPlot.png" />
        </div>
      </div>
      </div>
    );
  }
}
