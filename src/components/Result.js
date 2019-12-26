import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        { this.props.results }
      </div>
    )
  }
}


export default Result;