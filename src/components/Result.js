import React from 'react';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const emoji = require("emoji-dictionary");


class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderTooltip(props) {
    return <Tooltip {...props}>Simple tooltip</Tooltip>;
  }

  renderPopover(title, content) {
    return ( 
      <Popover id="popover-basic">
        <PopoverTitle as="h3">
          {`${title}`}
        </PopoverTitle>
        <PopoverContent>
          {`${content}`}
        </PopoverContent>
      </Popover>
    )
  }

  renderOverlay(text, title, content) {
    return (
      <OverlayTrigger trigger="hover" placement="right" overlay={this.renderPopover(title, content)}>
       <a href='#' data-toggle="popover">{`${text}`}</a>
      </OverlayTrigger>
    );
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

  displayEmoji() {
    // if this.convertSentiment === "positive"
    // return 
  }

  displayResults(results) {
    if (results === undefined) {
      return "";
    }
    else {
      return(
        <div>
          <h4><strong>Sentiment Analysis Results</strong></h4>          
          <p>{`You submitted: "${results.text}"`}</p>
          <p>{`Your sentence's tone is likely ${this.convertSentiment(results.score)}`}.</p>
          <p>{this.renderOverlay('Score: ', 'Score Explained', 'Score of the sentiment ranges between -1.0 to 1.0 and corresponds to the overall emotional leaning of the text.')}{`${results.score}`}</p>
          <p>{this.renderOverlay('Magnitude: ', 'Magnitude Explained', 'Magnitude indicates the overall strength of emotion within the given text. Unlike score, magnitude is not normalized, each expression of emotion within the text contributes to the texts magnitude.')}{`${results.magnitude}`}</p>
          <p>{`Suggested Emojis: ${this.displayEmoji()}`}</p>
          {/* <div>Entities:
            {this.makeEntities(results.entities)}
          </div> */}
        </div>
      )
    }
  }

  render() {
    let resultSentence = this.displayResults(this.props.results);
    
    return (
      <div>
        <section>{ resultSentence }</section>
      </div>
    )
  }
}


export default Result;