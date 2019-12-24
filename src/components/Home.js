import React from 'react';
import UserSubmissionForm from './UserSubmissionForm.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <h2>Welcome to my Capstone!</h2>
        <section>
          <p>My app is built using the following technologies...</p>
          <p>Interested in trying it out? Fill out the form below!</p>
          <p>
            <UserSubmissionForm />
          </p>
        </section>
      </div>
    )
  }
}

export default Home;