import React from "react";
require ('./sentiment.scss');
require ('../Dataset/dataset.css');

export default class Sentiment extends React.Component {
  render() {
    return (
      <div className="containerTop dataset">
        <h3 className="text-center headerData">Sentiment analysis</h3>
        <div className="text-center">To perform sentiment analysis we used the data from <a href="http://gameofthrones.wikia.com/wiki/Category:Locations">Fandom wiki</a> and we found 5 places that are the most
        suitable for holidays!</div>
        <div className="myTable">
        <table>
        <tr id="head">
          <th>Place</th>
          <th>Sentiment</th>
        </tr>
        <tr>
          <td>Palace_of_Justice</td>
          <td>5.63</td>
        </tr>
        <tr>
          <td>Mother of Mountains</td>
          <td>5.59</td>
        </tr>
        <tr>
          <td>Great Wyk</td>
          <td>5.54</td>
        </tr>
        <tr>
          <td>Moon Pool</td>
          <td>5.51</td>
        </tr>
        <tr>
          <td>Driftmark</td>
          <td>5.5</td>
        </tr>
        </table>
        </div>

      </div>

    );
  }
}
