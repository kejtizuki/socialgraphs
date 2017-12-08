import React from "react";
require ('../Sentiment/sentiment.scss');
require ('../Dataset/dataset.css');

export default class Notebooks extends React.Component {
  render() {
    return (
      <div className="containerTop dataset">
        <h3 className="text-center headerData">Python notebooks</h3>
          <div class="text-center">
            <a href="http://nbviewer.jupyter.org/github/mkoliba/SocGraphGOT/blob/master/FandomWiki.ipynb">Fandom Wiki network analysis (series)</a>
            <br />
            <a href="http://nbviewer.jupyter.org/github/mkoliba/SocGraphGOT/blob/master/WesterousWiki.ipynb">Westerous Wiki network analysis (books)</a>
            <br />
            <a href="http://nbviewer.jupyter.org/github/mkoliba/SocGraphGOT/blob/master/Sentiment.ipynb">Sentiment analysis</a>
            <br />
            <a href="http://nbviewer.jupyter.org/github/mkoliba/SocGraphGOT/blob/master/explainer_notebook.ipynb">Explanatory notebook</a>
          </div>

      </div>

    );
  }
}
