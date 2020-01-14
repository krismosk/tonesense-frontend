import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Card from 'react-bootstrap/Card';
const emoji = require("emoji-dictionary");

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

  createEmojiList(sentiment) {
    let emojis = []
    
    if (sentiment === "positive") {
      emojis.push(emoji.getUnicode("grin"));
      emojis.push(emoji.getUnicode("grinning"));
      emojis.push(emoji.getUnicode("sunglasses"));
      return emojis;
    }
    else if (sentiment === "neutral") {
      emojis.push(emoji.getUnicode("neutral_face"));
      emojis.push(emoji.getUnicode("expressionless"));
      emojis.push(emoji.getUnicode("no_mouth"));
      return emojis;
    }
    else if (sentiment === "negative") {
      emojis.push(emoji.getUnicode("slightly_frowning_face"));
      emojis.push(emoji.getUnicode("confounded"));
      emojis.push(emoji.getUnicode("angry"));
      return emojis;
    }
  }

  displayResults(results) {
    if (results === undefined) {
      return "";
    }
    else {
      return(
        <Card bg="light">
          <Card.Header><h1>Sentiment Analysis Results</h1></Card.Header> 
          <Card.Body>
            <Card.Title>
              <p>{`Your sentence's tone is likely ${this.convertSentiment(results.score)}`}.</p>
            </Card.Title>
            <p>{`You submitted: "${results.text}"`}</p>
            <p>{this.renderOverlay('Score: ', 'Score Explained', 'Score of the sentiment ranges between -1.0 to 1.0 and corresponds to the overall emotional leaning of the text.')}{`${results.score}`}</p>
            <p>{`Suggested Emojis: ${this.createEmojiList(this.convertSentiment(results.score))[0]} ${this.createEmojiList(this.convertSentiment(results.score))[1]}  ${this.createEmojiList(this.convertSentiment(results.score))[2]}`}</p>
          </Card.Body>
        </Card>
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

Result.propTypes = {
  results: PropTypes.array,
};

export default Result;