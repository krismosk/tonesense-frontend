import React from 'react';
import axios from 'axios';
import UserSubmissionForm from './UserSubmissionForm.js';
import Result from './Result.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      error: undefined,
      submissionText: undefined, 
    };
  }

  getResult = () => {
    console.log('get result method is called')
    axios.post('http://localhost:5000/api/v1/results', )
      .then((response) => {
        this.setState({
          results: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  saveSubmission = (sentence) => {
    this.setState({
      submissionText: sentence,
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to my Capstone!</h2>
        <section>
          <p>My app is built using the following technologies...</p>
          <p>Interested in trying it out? Fill out the form below!</p>
          <div>
            <UserSubmissionForm 
              getResult={this.getResult}
              saveSubmission={this.saveSubmission}
            />
          </div>
          <div>
            <Result
              results={this.state.results}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;