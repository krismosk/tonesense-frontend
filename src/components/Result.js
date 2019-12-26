import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // create a method that checks whether results is undefined
  // if it's not undefined, iterate through the results array
  // and display each element

  displayResults(results) {
    let resultsList;

    if (results === undefined) {
      return "undefined";
    }
    else {
      resultsList = results.map((result, i) => {
        console.log('KRISTINA');
        console.log(result['sentence']['score']);
        return result['sentence'];
      });
    }

    return resultsList;
  }

  render() {
    console.log('result component is being rendered');
    console.log(`${this.props.results}`);
    let resultSentence = this.displayResults(this.props.results);
    // resultSentence is an array of nested objects - should figure out a better way
    // to iterate through these easily
    console.log('result sentence');
    console.log(resultSentence);
    
    return (
      <div>
      </div>
    )
  }
}


export default Result;