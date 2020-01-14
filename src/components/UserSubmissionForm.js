import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CopyToClipboard from 'react-copy-to-clipboard';

class UserSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: '',
      copied: false,
      switch: false,
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
    
    this.props.saveSubmission(this.state.sentence);
    if (this.state.switch === false) {
      this.props.getMlResult(this.state.sentence);
    }
    else {
      this.props.getResult(this.state.sentence);
    }
  }

  onToggle = () => {
    this.setState({
      switch: !this.state.switch,
    });
  }

  onCopyClick = () => {
    this.setState({
      copied: true
    });
  }

  render() {
    const labelDisplay = this.state.switch === false ? "Try with the Google NLP API" : "Try with my Fine-Tuned Machine Learning Model";
    
    return (
      <div>
        <p>Get started for free and see how ToneSense can help you get your message across the right way - every time.</p>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Enter your sentence</Form.Label><br></br>
                <Form.Control 
                  placeholder="ToneSense is so cool!"
                  type="text"
                  value={this.state.sentence}
                  name="sentence"
                  onChange={this.onFormChange}
                /><br></br>
                <CopyToClipboard 
                  className="copy-button" 
                  text={this.state.sentence}
                  onCopy={this.onCopyClick}
                  >
                  <Button variant="outline-success">
                    Copy to clipboard
                  </Button>
                </CopyToClipboard>
                <div className="divider"></div>
                <Button variant="outline-success" onClick={this.onFormSubmit}>
                  Generate Result
                </Button><br></br>
                <div className="divider"></div>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label={labelDisplay}
                  onClick={this.onToggle}
                />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

UserSubmissionForm.propTypes = {
  getResult: PropTypes.func,
  saveSubmission: PropTypes.func,
}

export default UserSubmissionForm;