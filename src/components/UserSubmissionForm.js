import React from 'react';

class UserSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: '',
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      sentence: '',
    });

    // invoke callback function from home
    // that will make axios POST request to the back end
    // then it will save the result within it's state
    // and send the result to the Result comp.
    
    this.props.saveSubmission(this.state.sentence);
    this.props.getResult(this.state.sentence);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <input
              placeholder="Enter your sentence here..."
              type="text"
              value={this.state.sentence}
              name="sentence"
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <input 
              type="submit"
              value="Generate Result"
              onClick={this.onFormSubmit}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default UserSubmissionForm;