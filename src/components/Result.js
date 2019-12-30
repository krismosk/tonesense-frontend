import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  displayResults(results) {
    if (results === undefined) {
      return "results is undefined";
    }
    else {
      console.log(results);
      return(
        <div>
          <h3>Sentiment Analysis Results</h3>
          <p>{`Your submission: ${results.text}`}</p>
          <p>{`Score: ${results.score}`}</p>
          <p>{`Magnitude: ${results.magnitude}`}</p>
        </div>
      )
    }
  }

  render() {
    let resultSentence = this.displayResults(this.props.results);
    // console.log(resultSentence);
    return (
      <div>
        { resultSentence }
      </div>
    )
  }
}


export default Result;