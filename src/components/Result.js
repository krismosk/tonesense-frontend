import React from 'react';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  makeEntities(entities) {
    let entityList = entities.map((entity, i) => (
      <div>
        <p>{`Name: ${entity['name']}`} {`Type: ${entity['type']}`} {`Salience ${entity['salience']}`}</p>
      </div>
    ));

    return entityList;
  }

  convertSentiment(score) {
    // if result.score is 0.25 to 1.0 return "positive"
    // elsif result.score is === -0.25 to 0.25 return "neutral"
    // else result.score is === -1.0 to -0.25 return "negative"
    if (score >= 0.25 && score <= 1.0) {
      return "positive";
    }
    else if (score >= -0.25 && score <= 0.25) {
      return "neutral";
    }
    else if (score >= -1.0 && score <= -0.25) {
      return "negative";
    }
    else {
      return "ERROR";
    }
  }

  displayResults(results) {
    if (results === undefined) {
      return "";
    }
    else {
      return(
        <div>
          <h3>Sentiment Analysis Results</h3>
          <p>{`Your submission text: ${results.text}`}</p>
          <p>{`Your sentence's tone is likely ${this.convertSentiment(results.score)}`}.</p>
          <p>{`Score: ${results.score}`}</p>
          <p>{`Magnitude: ${results.magnitude}`}</p>
          <span>
            Magnitude indicates the overall strength of emotion (both positive and negative) within the given text.
            Unlike score, magnitude is not normalized, each expression of emotion within the text contributes to the 
            text's magnitude (so, longer text blocks may have greater magnitudes.)
          </span>
          <div>Entities:
            {this.makeEntities(results.entities)}
          </div>
        </div>
      )
    }
  }

  renderTooltip(props) {
    return <Tooltip {...props}>Simple tooltip</Tooltip>;
  }

  renderPopover() {
    return ( 
      <Popover id="popover-basic">
        <PopoverTitle as="h3">
          Title
        </PopoverTitle>
        <PopoverContent>
          Content
        </PopoverContent>
      </Popover>

    )
  }

  renderOverlay() {
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={this.renderPopover()}>
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
    );
  }

  render() {
    let resultSentence = this.displayResults(this.props.results);
    

    return (
      <div>
        <section>{ resultSentence }</section>
        <section>{ this.renderOverlay() }</section>
      </div>
    )
  }
}


export default Result;