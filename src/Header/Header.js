import React from "react";
require ('./header.scss');

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-container">
        <header className="App-header">
          <h3>Game of Thrones Social Graphs project</h3>
          <p className="Group-Name">by Martin, Jacob and Kasia</p>
        </header>
      </div>
    );
  }
}
