import React from "react";
require ('./dataset.css');

export default class Dataset extends React.Component {
  render() {
    return (
      <div className="containerTop dataset">
        <h3 className="text-center headerData">Purpose of the project</h3>
        <p className="text-center infoData">Everyone who have watched Game of Thrones knows how many persons and relationships
        are there involved and it’s quite hard to remember all of them. Our goal is to explore the characters from Game of Thrones’s relationship.
        We've decided to compare the network created by characters from series with the one
        created from characters from the books. After analysis of these two networks we made a sentiment analysis of the locations
        that can be found on <a href="http://gameofthrones.wikia.com/wiki/Category:Locations">Fandom wiki</a>. By doing this
        we managed to find <bold>the best place for holiday!</bold></p>
        <h3 className="text-center headerData">Datasources</h3>
        <div className="text-center">To get the data we used xml dumps and wiki API.</div>
        <div class="rowDataSources">
        <div className="col-md-6 dataSource">
          <h4><img src="film.png" className="smallIcon"/> Data used to analyse series</h4>
          <a href="http://gameofthrones.wikia.com/wiki/Special:Statistics">Fandom wiki</a>
        </div>
        <div className="col-md-6 dataSource">
          <h4><img src="book.png" className="smallIcon" id="book"/> Data used to analyse books</h4>
          <a href="http://awoiaf.westeros.org/index.php/Main_Page" id="bookLink">Book wiki</a>
        </div>
        </div>
      </div>

    );
  }
}
