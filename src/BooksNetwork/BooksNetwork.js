import React from "react";
import DegreeInfoBooks from '../DegreeInfoBooks/DegreeInfoBooks';
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
        <h3>Network of characters from books</h3>
        <img src="graphBooks.png" className="text-center graph"/>
        </div>
        <div className="col-md-12 text-center">
          <div className="networkInfoBooks">
            <div className="oneInformationBooks">
              <div className="elipseBooks">2715</div>
              <div className="labelInfo">NODES</div>
            </div>
            <div className="oneInformationBooks">
              <div className="elipseBooks">17211</div>
              <div className="labelInfo">EDGES</div>
            </div>
            <div className="oneInformationBooks">
              <div className="elipseBooks">6.34</div>
              <div className="labelInfo">AVG IN DEGREE</div>
            </div>
            <div className="oneInformationBooks">
              <div className="elipseBooks">6.34</div>
              <div className="labelInfo">AVG OUT DEGREE</div>
            </div>
            <div className="oneInformationBooks">
              <div className="elipseBooks">6.0</div>
              <div className="labelInfo">MEDIAN DEGREE</div>
            </div>
          </div>
        </div>
      </div>
      <DegreeInfoBooks />

      <div className="basicAnalysis">
        <div className="threeCols">
          <img src="inDegreeBooks.png" />
          <span className="labelInfo">In degree</span>
        </div>
        <div className="threeCols">
          <img src="outDegreeBooks.png" />
          <span className="labelInfo">Out degree</span>
        </div>
        <div className="threeCols">
          <img src="scatterPlotBooks.png" />
        </div>
      </div>

      <div className="text-center">
        <h3>Graph showing the communities</h3>
        <p>The modularity of the communities is 0.52</p>
        <img src="communitiesBooks.png" className="graph"/>
        <h3>10 most central characters (based on betweennes centrality):</h3>
          <ul>
            <li>Stannis Baratheon, 0.12</li>
            <li>Daenerys Targaryen, 0.10</li>
            <li>Tyrion Lannister, 0.09</li>
            <li>John Snow, 0.08</li>
            <li>Jaime Lannister, 0.08</li>
            <li>Arya Stark, 0.07</li>
            <li>Robb Stark, 0.06</li>
            <li>Tywin Lannister, 0.05</li>
            <li>Cersei Lannister, 0.05</li>
            <li>Aegon III Targaryen, 0.05</li>
          </ul>

      </div>
      </div>
    );
  }
}
