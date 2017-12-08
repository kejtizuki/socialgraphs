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
              <div className="elipse">1064</div>
              <div className="labelInfo">NODES</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">9249</div>
              <div className="labelInfo">EDGES</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">8.69</div>
              <div className="labelInfo">AVG IN DEGREE</div>
            </div>
            <div className="oneInformation">
              <div className="elipse">8.69</div>
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
      <div className="text-center">
        <h3>Graph showing the communities</h3>
        <p>The modularity of the communities is 0.52</p>
        <img src="communitiesSeries.png" className="graph"/>
        <h3>10 most central characters (based on betweennes centrality):</h3>
          <ul>
            <li>Daennerys Targaryen, 0.15</li>
            <li>John Snow, 0.14</li>
            <li>Tyrion Lannister, 0.096</li>
            <li>Arya Stark, 0.06</li>
            <li>Robb Stark, 0.0599</li>
            <li>Jaime Lannister, 0.059</li>
            <li>Stannis Baratheon, 0.054</li>
            <li>Morag Umber, 0.051</li>
            <li>Joffrey Baratheon, 0.045</li>
            <li>Craster, 0.045</li>
          </ul>

      </div>

      </div>
    );
  }
}
