import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
    
    this.props.saveSubmission(this.state.sentence);
    this.props.getResult(this.state.sentence);
  }

  render() {
    return (
      <div>
        <h1>Demo</h1>
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
                <Button variant="outline-success" onClick={this.onFormSubmit}>
                  Generate Result
                </Button>
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