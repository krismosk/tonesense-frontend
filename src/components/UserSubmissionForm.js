import React from 'react';
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
        <p>Get started for free and see how ToneSense can help you get your message across the right way - every time.</p>
        {/* <form>
          <div>
            <input
              placeholder="Enter some text..."
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
        </form> */}

        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Enter your sentence</Form.Label>
                <Form.Control 
                  type="text"
                  value={this.state.sentence}
                  name="sentence"
                  onChange={this.onFormChange}
                />
                <Button onClick={this.onFormSubmit}>
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

export default UserSubmissionForm;