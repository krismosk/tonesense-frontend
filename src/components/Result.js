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
      return <div>{`${results}`}</div>;
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