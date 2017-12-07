import React from "react";
import Graph from '../Graph/Graph';
import SeriesNetwork from '../SeriesNetwork/SeriesNetwork';
import BooksNetwork from '../BooksNetwork/BooksNetwork';
require ('./network.css');


export default class Network extends React.Component {
  constructor() {
    super();
    this.state = { showSeries: true, showBooks: false };
    this.showSeries = this.showSeries.bind(this);
    this.showBooks = this.showBooks.bind(this);
  }

  showSeries() {
    this.setState({
      showSeries: !this.state.showSeries,
      showBooks: false
    });
  }
  showBooks() {
    this.setState({
      showSeries: false,
      showBooks: !this.state.showBooks
    });
  }

  render() {
    return(
      <div className="containerTop">
        <div className="tab text-center">
        <button className={'tabLinkSeries ' + (this.state.showSeries ? 'tabLinkActiveSeries' : 'tabLinkSeries')} onClick={this.showSeries}>Series Network</button>
        <button className={'tabLinkBooks ' + (this.state.showBooks ? 'tabLinkActiveBooks' : 'tabLinkBooks')} onClick={this.showBooks}>Books Network</button>
        </div>
        <div>
          { this.state.showSeries ? <SeriesNetwork /> : <BooksNetwork />}
        </div>
      </div>
    )
  }
}
