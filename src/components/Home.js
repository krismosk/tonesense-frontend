import React from 'react';
import axios from 'axios';
import UserSubmissionForm from './UserSubmissionForm.js';
import Result from './Result.js';
import Features from './Features.js';
import Landing from './Landing.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import github_64 from '../img/github_64.png';
import logo from '../img/logo.png';
import './Home.css';

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

  getMlResult = (submissionText) => {
    // replace with deployed heroku link
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
          <Navbar id="navbar-2" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Brand className="brandname" href="#home"><img src={logo}></img> ToneSense</Navbar.Brand>
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
            <div className="landing-section">
              <h1 id="home"><Landing /></h1>
            </div>

            <div className="feature-section">
              <h1 id="features">Tone is essential for effective writing</h1>
              <Features />
            </div>

            <section className="demo-section">
              <h1 id="demo">Try it now!</h1>
                <div>
                  <UserSubmissionForm 
                    getResult={this.getResult}
                    getMlResult={this.getMlResult}
                    saveSubmission={this.saveSubmission}
                  />
                </div>
                <div>
                  <Result
                    results={this.state.results}
                  />
                </div>
            </section>

            <section className="contact-section">
              <h1 id="contact">Want to know more?</h1>
                <p>Created by a student at Ada Developer's Academy</p>
                <p>
                  <a href="https://github.com/krismosk/frontend-capstone-2/"><img src={github_64} alt="Github logo"></img></a>
                </p>
                <p><small>View source code on Github</small></p>
            </section>
        </div>
      </div>
    )
  }
}

export default Home;