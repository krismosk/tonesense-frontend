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

  displayResults(results) {
    if (results === undefined) {
      return "";
    }
    else {
      return(
        <div>
          <h3>Sentiment Analysis Results</h3>
          <p>{`Your submission: ${results.text}`}</p>
          <p>{`Score: ${results.score}`}</p>
          <p>{`Magnitude: ${results.magnitude}`}</p>
          {/* <p>{`Entities: ${this.makeEntities(results.entities)}`}</p> */}
          <div>Entities:
            {this.makeEntities(results.entities)}
          </div>
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