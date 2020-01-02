import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  makeEntities(entities) {
    let entityList = entities.map((entity, i) => (
      <div>
        <p>{`Name: ${entity['name']}`} {`Type: ${entity['type']}`} {`Salience ${entity['salience']}`}</p>
      </div>
    ));

    return entityList;
  }

  convertSentiment(score) {
    // if result.score is 0.25 to 1.0 return "positive"
    // elsif result.score is === -0.25 to 0.25 return "neutral"
    // else result.score is === -1.0 to -0.25 return "negative"
    if (score >= 0.25 && score <= 1.0) {
      return "positive";
    }
    else if (score >= -0.25 && score <= 0.25) {
      return "neutral";
    }
    else if (score >= -1.0 && score <= -0.25) {
      return "negative";
    }
    else {
      return "ERROR";
    }
  }

  displayResults(results) {
    if (results === undefined) {
      return "";
    }
    else {
      return(
        <div>
          <h3>Sentiment Analysis Results</h3>
          <p>{`Your submission: ${results.text}`}</p>
          <p>{`Your sentence's tone is likely ${this.convertSentiment(results.score)}`}.</p>
          <p>{`Score: ${results.score}`}</p>
          <p>{`Magnitude: ${results.magnitude}`}</p>
          <div>Entities:
            {this.makeEntities(results.entities)}
          </div>
        </div>
      )
    }
  }

  render() {
    let resultSentence = this.displayResults(this.props.results);

    return (
      <div>
        { resultSentence }
      </div>
    )
  }
}


export default Result;