import React from "react";
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import data from './newData.json';
require ('../Network/network.css');

export default class Graph extends React.Component {

  constructor(){
    super();
    this.state = {isLoading: true}
  }

  componentDidMount() {
    this.setState ({isLoading: false})
  }

  render() {

    const nodes = data.nodes;
    const links = data.links;

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

    return (
      this.state.isLoading? <img src="giphy.gif" /> :
      <InteractiveForceGraph
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
        </InteractiveForceGraph>
    );
  }
}
