import React from 'react';
import axios from 'axios';
import UserSubmissionForm from './UserSubmissionForm.js';
import Result from './Result.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      error: undefined,
      submissionText: undefined, 
    };
  }

  getResult = (submissionText) => {
    console.log('get result method is called')
    axios.post(`http://localhost:5000/api/v1/results/${submissionText}`, submissionText)
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

  saveCriteria(results) {
    this.setState({
      score: results.score,
      magnitude: results.magnitude,
    })
  }

  render() {
    return (
      <div>
        <nav>
          <Navbar id="navbar-2" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">ToneSense</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <a className="nav-link" href="#features">Features</a>
                <a className="nav-link" href="#demo">Demo</a>
                <a className="nav-link" href="#contact">Contact</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
        <div data-spy="scroll" data-target="#navbar-2" data-offset="0">
            <h3 id="features">Features Section</h3>
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
            <h3 id="demo">Demo Section</h3>
            <h3 id="contact">Contact Section</h3>
        </div>
      </div>
    )
  }
}

export default Home;