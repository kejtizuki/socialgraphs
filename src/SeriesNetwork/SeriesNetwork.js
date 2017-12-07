import React from "react";
import DegreeInfoSeries from '../DegreeInfoSeries/DegreeInfoSeries';
import Graph from '../Graph/Graph';
require ('../Network/network.css');

export default class SeriesNetwork extends React.Component {

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

    return (
      <div className="container">
      <p className="text-center info">To get preliminary insights about the characters we created the graph representing the network.
      The characters are represented as nodes. We made a basic analysis and got the following statistics about the network:
      </p>
      <div className="row rowNetwork">
        <div className="text-center">
        <h3>Network of characters from series</h3>
          <img src="graphSeries.png" className="text-center graph" />
        </div>
        <div className="col-md-12 text-center">
          <div className="networkInfo">
            <div className="oneInformation">
              <div className="elipse">1063</div>
              <div className="labelInfo">NODES</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">9006</div>
              <div className="labelInfo">EDGES</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">8.47</div>
              <div className="labelInfo">AVG IN DEGREE</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">8.47</div>
              <div className="labelInfo">AVG OUT DEGREE</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">8.0</div>
              <div className="labelInfo">MEDIAN DEGREE</div>
            </div>
          </div>
        </div>
      </div>
      <DegreeInfoSeries />
      <div className="basicAnalysis">
        <div className="threeCols">
          <img src="inDegreeSeries.png" />
          <span className="labelInfo">In degree</span>
        </div>
        <div className="threeCols">
          <img src="outDegreeSeries.png" />
          <span className="labelInfo">Out degree</span>
        </div>
        <div className="threeCols">
          <img src="scatterPlotSeries.png" />
        </div>
      </div>
      </div>
    );
  }
}
